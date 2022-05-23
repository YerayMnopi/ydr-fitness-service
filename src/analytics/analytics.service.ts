import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnalyticsRepository } from './analytics.repository';

@Injectable()
export class AnalyticsService {

  constructor(
    private readonly analyticsRepository: AnalyticsRepository
  ) {}

  async getAverageWeightByExercise(userId: string): Promise<{[key: string]: number}> {
    return this.analyticsRepository.averageWeightByExercise(userId);
  }
}
