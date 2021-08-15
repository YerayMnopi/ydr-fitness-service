import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionsController } from './executions.controller';
import { ExecutionsService } from './executions.service';
import { Execution } from './execution.entity';
import * as httpMocks from 'node-mocks-http';
import { Request } from 'express';

describe('ExecutionsController', () => {
  let controller: ExecutionsController;
  let service: ExecutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecutionsController],
      providers: [
        {provide: ExecutionsService, useValue: {
          findAll: jest.fn(),
          create: jest.fn()
        }}],
    }).compile();

    controller = module.get<ExecutionsController>(ExecutionsController);
    service = module.get<ExecutionsService>(ExecutionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  describe('findAll', () => {
    it('should return an array of executions', async () => {
      const result = [];
      jest.spyOn(service, 'findAll').mockImplementation(async() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should accept a post request to create executions', async() => {
      const result = {} as Execution;
      jest.spyOn(service, 'create').mockImplementation(async() => result);
      const request = {
        user: {
          id: 'test',
        },
        body: {
          trainingId: 'test',
          exerciseId: 'test'
        }
      } as unknown as Request;

      expect(await controller.create(request)).toBe(result);  
    });
  });
});
