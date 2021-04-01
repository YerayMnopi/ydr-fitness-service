import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';
import { Training } from './training.entity';
import * as httpMocks from 'node-mocks-http';
import { Request } from 'express';

describe('TrainingsController', () => {
  let controller: TrainingsController;
  let service: TrainingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingsController],
      providers: [
        {provide: TrainingsService, useValue: {
          findAll: jest.fn(),
          create: jest.fn()
        }}],
    }).compile();

    controller = module.get<TrainingsController>(TrainingsController);
    service = module.get<TrainingsService>(TrainingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  describe('findAll', () => {
    it('should return an array of trainings', async () => {
      const result = [];
      jest.spyOn(service, 'findAll').mockImplementation(async() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should accept a post request to create trainings', async() => {
      const result = {} as Training;
      jest.spyOn(service, 'create').mockImplementation(async() => result);
      const request = {
        user: {
          id: 'test'
        }
      } as unknown as Request;

      expect(await controller.create(request)).toBe(result);  
    });
  });
});
