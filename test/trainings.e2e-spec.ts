import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormE2eConfig, YdrJwtModule } from 'ydr-nest-common';
import { TrainingsModule } from '../src/trainings/trainings.module';
import { Exercise } from '../src/exercises/exercise.entity';
import { Training } from '../src/trainings/training.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { trainingFactory } from '../src/trainings/training.factory';

describe('TrainingsController (e2e)', () => {
  let app: INestApplication;
  let trainingsRepository: Repository<Training>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync(ormE2eConfig),
        TrainingsModule,
        YdrJwtModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    trainingsRepository = moduleFixture.get('TrainingRepository');
    jwtService = moduleFixture.get(JwtService);
  });

  describe('Trainings', () => {
    describe('POST /trainings', () => {
      const endpoint = '/trainings';
      let training: Training;
      let token: string;
  
      beforeEach(async() => {
        training = trainingFactory();
        token = jwtService.sign({
          sub: '5d70ff0c-0f9c-4f9c-924c-348ab771014b'
        });
      });
  
      it('should create a new training', () => {
        return request(app.getHttpServer())
          .post(endpoint)
          .set('Authorization', `Bearer ${token}`)
          .send(training)
          .expect(201);
      });
    });
  
    describe('GET /trainings', () => {
      const training = trainingFactory();
      let token: string;
  
      beforeEach(async(done) => {
        await trainingsRepository.save([
          training,
          trainingFactory(),
          trainingFactory(),
        ]);
        done();
        token = jwtService.sign({});
      });
  
      it('should return Unauthorized', async () => {
        await request.agent(app.getHttpServer())
          .get('/trainings')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401);
      });
  
      it('should return an array of trainings', async () => {
        const response: {body: Exercise[]} = await request.agent(app.getHttpServer())
          .get('/trainings')  
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(200);
    
        expect(response.body.length).toBe(3);
      });
    });

    describe('GET /trainings/:id', () => {
      const training = trainingFactory();
      let token: string;
  
      beforeEach(async(done) => {
        await trainingsRepository.save([
          training,
          trainingFactory(),
          trainingFactory(),
        ]);
        done();
        token = jwtService.sign({});
      });
  
      it('should return Unauthorized', async () => {
        await request.agent(app.getHttpServer())
          .get(`/trainings/${training.id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401);
      });
  
      it('should return a training', async () => {
        const response: {body: Exercise} = await request.agent(app.getHttpServer())
          .get(`/trainings/${training.id}`)  
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(200);
    
        expect(response.body.id).toBe(training.id);
      }); 
    });

    afterEach(async () => {
      await trainingsRepository.query(`DELETE FROM trainings;`);
    });
  })

  afterAll(async () => {
    await app.close();
  });
});
