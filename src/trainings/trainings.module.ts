import { Module } from '@nestjs/common';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './training.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Training])],
  controllers: [TrainingsController],
  providers: [TrainingsService],
  exports: [TrainingsService]
})
export class TrainingsModule {}
