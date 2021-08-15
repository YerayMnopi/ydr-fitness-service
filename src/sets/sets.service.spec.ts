import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SetsService } from './sets.service';
import { SetEntity } from './set.entity';
import { ExecutionsService } from '../execution/executions.service';

describe('SetsService', () => {
  let service: SetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SetsService,
        { provide: getRepositoryToken(SetEntity), useFactory: () => ({
          find: jest.fn(),
          update: jest.fn(),
          save: jest.fn(),
        }) },
        {
          provide: ExecutionsService, useValue: {}
        }
      ],
      
    }).compile();

    service = module.get<SetsService>(SetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
