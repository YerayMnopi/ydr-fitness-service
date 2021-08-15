import { Module } from '@nestjs/common';
import { ExecutionsController } from './executions.controller';
import { ExecutionsService } from './executions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Execution } from './execution.entity';
import { TrainingsModule } from '../trainings/trainings.module';
import { ExercisesModule } from '../exercises/exercises.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Execution]),
    TrainingsModule,
    ExercisesModule
  ],
  controllers: [ExecutionsController],
  providers: [ExecutionsService],
  exports: [ExecutionsService]
})
export class ExecutionsModule {}
