import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionsService } from './executions.service';
import { MockType } from 'ydr-nest-common';
import { Repository } from 'typeorm';
import { Execution } from './execution.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ExecutionsService', () => {
  let service: ExecutionsService;
  let repository: MockType<Repository<Execution>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExecutionsService,
        { provide: getRepositoryToken(Execution), useFactory: () => ({
          find: jest.fn(),
          update: jest.fn(),
          save: jest.fn(),
        }) }
      ],
    }).compile();

    service = module.get<ExecutionsService>(ExecutionsService);
    repository = module.get(getRepositoryToken(Execution));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('create', () => {
    const userId = 'test';
    const trainingId = 'test';
    const exerciseId = 'test';
    let createdExecution: Execution;

    beforeEach(async() => {
      repository.save.mockResolvedValueOnce(userId as never); 
      createdExecution = await service.create(
        userId,
        trainingId,
        exerciseId
      );
    });

    it('should call to save method of user repository', async() => {
      expect(repository.save).toBeCalledWith({
        userId,
        trainingId,
        exerciseId
      });
    });

    it('should return the created user', async() => {      
      expect(createdExecution).toBeTruthy;
    });
  });
});
