import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Execution } from '../execution/execution.entity';
import { Exercise } from '../exercises/exercise.entity';
import { SetEntity } from '../sets/set.entity';
import { Training } from '../trainings/training.entity';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsRepository } from './analytics.repository';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [TypeOrmModule.forFeature([Training, Exercise, Execution, SetEntity])],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, AnalyticsRepository]
})
export class AnalyticsModule {}
