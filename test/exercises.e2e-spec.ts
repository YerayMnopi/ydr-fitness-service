import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormE2eConfig, YdrJwtModule } from 'ydr-nest-common';
import { TrainingsModule } from '../src/trainings/trainings.module';
import { ExercisesModule } from '../src/exercises/exercises.module';

import { Exercise } from '../src/exercises/exercise.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { exerciseFactory } from '../src/exercises/exercise.factory';

describe('ExercisesController (e2e)', () => {
  let app: INestApplication;
  let exercisesRepository: Repository<Exercise>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync(ormE2eConfig),
        ExercisesModule,
        YdrJwtModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    exercisesRepository = moduleFixture.get('ExerciseRepository');
    jwtService = moduleFixture.get(JwtService);
  });

  describe('Exercises', () => {
    describe('POST /exercises', () => {
      const endpoint = '/exercises';
      let exercise: Exercise;
      let token: string;
  
      beforeEach(async() => {
        exercise = exerciseFactory();
        token = jwtService.sign({});
      });
  
      it('should create a new exercise', () => {
        return request(app.getHttpServer())
          .post(endpoint)
          .set('Authorization', `Bearer ${token}`)
          .send(exercise)
          .expect(201);
      });
    });
  
    describe('GET /exercises', () => {
      const adminExercise = exerciseFactory();
      let token: string;
  
      beforeEach(async(done) => {
        await exercisesRepository.save([
          adminExercise,
          exerciseFactory(),
          exerciseFactory(),
        ]);
        done();
        token = jwtService.sign({});
      });
  
      it('should return Unauthorized', async () => {
        await request.agent(app.getHttpServer())
          .get('/exercises')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401);
      });
  
      it('should return an array of exercises', async () => {
        const response: {body: Exercise[]} = await request.agent(app.getHttpServer())
          .get('/exercises')  
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(200);
    
        expect(response.body.length).toBe(3);
      });
    });
  
    afterEach(async () => {
      await exercisesRepository.query(`DELETE FROM exercises;`);
    });
  })

  afterAll(async () => {
    await app.close();
  });
});
