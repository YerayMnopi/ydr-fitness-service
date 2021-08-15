import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Execution } from './execution.entity';
import { Repository } from 'typeorm';
import { TrainingsService } from '../trainings/trainings.service';
import { ExercisesService } from '../exercises/exercises.service';

@Injectable()
export class ExecutionsService {

  constructor(
    @InjectRepository(Execution)
    private readonly executionsRepository: Repository<Execution>,
    private readonly trainingsService: TrainingsService,
    private readonly exerciseService: ExercisesService
  ) {}

  async findById(id: string): Promise<Execution> {
    return this.executionsRepository.findOne({id});
  }

  async findAll(): Promise<Execution[]> {
    return this.executionsRepository.find({order: {
      createdAt: 'DESC'
    }});
  }
  
  async create(userId: string, trainingId: string, exerciseId: string): Promise<Execution | undefined> {
    const training = await this.trainingsService.findById(trainingId);
    const exercise = await this.exerciseService.findById(exerciseId);
    return this.executionsRepository.save({
      userId,
      training,
      exercise,
      createdAt: new Date()
    });
  }
 
  async update(executionId: string): Promise<Execution | undefined> {
    return this.executionsRepository.save({
      id: executionId,
    });
  }
}
