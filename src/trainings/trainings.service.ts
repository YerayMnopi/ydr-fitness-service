import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Training } from './training.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class TrainingsService {

  constructor(
    @InjectRepository(Training)
    private readonly trainingsRepository: Repository<Training>
  ) {}

  async findById(id: string): Promise<Training> {
    return this.trainingsRepository.findOne({id});
  }

  async findAll(): Promise<Training[]> {
    return this.trainingsRepository.createQueryBuilder('training')
      .leftJoinAndSelect("training.executions", "execution")
      .leftJoinAndSelect("execution.exercise", "exercise")
      .leftJoinAndSelect("execution.sets", "set")
      .orderBy({
        'training.createdAt': 'DESC',
        'execution.createdAt': 'ASC',
        'set.createdAt': 'ASC',
      })
      .getMany()
  }

  async create(userId: string): Promise<Training | undefined> {
    return this.trainingsRepository.save({
      userId: userId,
      createdAt: new Date()
    });
  }

  async update(trainingId: string): Promise<Training | undefined> {
    return this.trainingsRepository.save({
      id: trainingId,
    });
  }

  async delete(trainingId: string): Promise<DeleteResult | undefined> {
    return this.trainingsRepository.delete({
      id: trainingId,
    });
  }
}
