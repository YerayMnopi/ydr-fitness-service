import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ormConfig, YdrJwtModule } from 'ydr-nest-common';
import { TrainingsModule } from './trainings/trainings.module';
import { ExercisesModule } from './exercises/exercises.module';
import { SetsModule } from './sets/sets.module';
import { ExecutionsModule } from './execution/executions.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    YdrJwtModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(ormConfig),
    TrainingsModule,
    ExercisesModule,
    SetsModule,
    ExecutionsModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
