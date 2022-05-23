import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormE2eConfig, YdrJwtModule } from 'ydr-nest-common';
import { Exercise } from '../src/exercises/exercise.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { exerciseFactory } from '../src/exercises/exercise.factory';
import { AnalyticsModule } from '../src/analytics/analytics.module';
import { Training } from '../src/trainings/training.entity';
import { trainingFactory } from '../src/trainings/training.factory';
import { executionFactory } from '../src/execution/executions.factory';
import * as request from 'supertest';
import { Execution } from '../src/execution/execution.entity';
import { SetEntity } from '../src/sets/set.entity';
import { setFactory } from '../src/sets/set.factory';

fdescribe('AnalyticsController (e2e)', () => {
  let app: INestApplication;
  let exercisesRepository: Repository<Exercise>;
  let trainingsRepository: Repository<Training>;
  let executionsRepository: Repository<Execution>;
  let setsRepository: Repository<SetEntity>;
  let jwtService: JwtService;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync(ormE2eConfig),
        AnalyticsModule,
        YdrJwtModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    exercisesRepository = moduleFixture.get('ExerciseRepository');
    trainingsRepository = moduleFixture.get('TrainingRepository');
    executionsRepository = moduleFixture.get('ExecutionRepository');
    setsRepository = moduleFixture.get('SetEntityRepository');

    jwtService = moduleFixture.get(JwtService);
  });

  beforeEach(async(done) => {
    await trainingsRepository.save([
      trainingFactory(),
      trainingFactory(),
    ]);
    await exercisesRepository.save([
      exerciseFactory(),
      exerciseFactory(),
      exerciseFactory(),
    ]);

    await executionsRepository.save(executionFactory());
    await setsRepository.save(setFactory());
    done();
    token = jwtService.sign({
      sub: 'cc98f392-f985-4a46-9583-41b99f2abe00'
    });
  });

  describe('getAverageWeightByExercise', () => {
    it('should return an object of exercises with its average weight', async () => {
      const response: {body: any} = await request.agent(app.getHttpServer())
        .get('/analytics/average-weight-by-exercise')  
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200);
  
      expect(response.body.length).toBe(3);
    });
  });

  afterEach(async () => {
    await trainingsRepository.query(`DELETE FROM trainings;`);
    await exercisesRepository.query(`DELETE FROM exercises;`);
    await executionsRepository.query(`DELETE FROM executions;`);
    await setsRepository.query(`DELETE FROM sets;`);
  });

  afterAll(async () => {
    await app.close();
  });
});
