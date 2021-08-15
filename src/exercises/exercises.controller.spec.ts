import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { Exercise } from './exercise.entity';
import * as httpMocks from 'node-mocks-http';

describe('ExercisesController', () => {
  let controller: ExercisesController;
  let service: ExercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      providers: [
        {provide: ExercisesService, useValue: {
          findAll: jest.fn(),
          create: jest.fn()
        }}],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
    service = module.get<ExercisesService>(ExercisesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  describe('findAll', () => {
    it('should return an array of exercises', async () => {
      const result = [];
      jest.spyOn(service, 'findAll').mockImplementation(async() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should accept a post request to create exercises', async() => {
      const result = {} as Exercise;
      jest.spyOn(service, 'create').mockImplementation(async() => result);
      const request = httpMocks.createRequest({
        method: 'POST',
        body: result,
        user: {
          id: 'test'
        }
      });

      expect(await controller.create(request)).toBe(result);  
    });
  });
});
