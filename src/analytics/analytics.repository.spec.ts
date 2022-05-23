import { Test, TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import { AnalyticsRepository } from './analytics.repository';

describe('AnalyticsRepository', () => {
  let repository: AnalyticsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticsRepository,
        {provide: EntityManager, useValue: {}}
      ],
    }).compile();

    repository = module.get<AnalyticsRepository>(AnalyticsRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
