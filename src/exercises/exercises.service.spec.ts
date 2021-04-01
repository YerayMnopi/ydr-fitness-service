import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesService } from './exercises.service';
import { MockType } from 'ydr-nest-common';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ExercisesService', () => {
  let service: ExercisesService;
  let repository: MockType<Repository<Exercise>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExercisesService,
        { provide: getRepositoryToken(Exercise), useFactory: () => ({
          find: jest.fn(),
          update: jest.fn(),
          save: jest.fn(),
        }) }
      ],
    }).compile();

    service = module.get<ExercisesService>(ExercisesService);
    repository = module.get(getRepositoryToken(Exercise));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('create', () => {
    const exerciseToCreate: Exercise = {} as Exercise;
    let createdExercise: Exercise;

    beforeEach(async() => {
      repository.save.mockResolvedValueOnce(exerciseToCreate as never); 
      createdExercise = await service.create(exerciseToCreate);
    });

    it('should call to save method of user repository', async() => {
      expect(repository.save).toBeCalledWith(exerciseToCreate);
    });

    it('should return the created user', async() => {      
      expect(createdExercise).toBeTruthy;
    });
  });
});
