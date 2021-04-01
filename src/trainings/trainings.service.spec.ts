import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsService } from './trainings.service';
import { MockType } from 'ydr-nest-common';
import { Repository } from 'typeorm';
import { Training } from './training.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TrainingsService', () => {
  let service: TrainingsService;
  let repository: MockType<Repository<Training>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrainingsService,
        { provide: getRepositoryToken(Training), useFactory: () => ({
          find: jest.fn(),
          update: jest.fn(),
          save: jest.fn(),
        }) }
      ],
    }).compile();

    service = module.get<TrainingsService>(TrainingsService);
    repository = module.get(getRepositoryToken(Training));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('create', () => {
    const userId = 'test';
    let createdTraining: Training;

    beforeEach(async() => {
      repository.save.mockResolvedValueOnce(userId as never); 
      createdTraining = await service.create(userId);
    });

    it('should call to save method of user repository', async() => {
      expect(repository.save).toBeCalledWith({userId: userId});
    });

    it('should return the created user', async() => {      
      expect(createdTraining).toBeTruthy;
    });
  });
});
