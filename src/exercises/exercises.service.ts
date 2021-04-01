import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { Repository } from 'typeorm';
import { slugify } from 'ydr-nest-common';

@Injectable()
export class ExercisesService {

  constructor(
    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>
  ) {}

  async findById(id: string): Promise<Exercise> {
    return this.exercisesRepository.findOne({id});
  }

  async findAll(): Promise<Exercise[]> {
    return this.exercisesRepository.find({order: {
      createdAt: 'DESC'
    }});
  }

  async create(userId: string, name: string): Promise<Exercise | undefined> {
    return this.exercisesRepository.save({
      userId,
      name,
      slug: slugify(name),
      createdAt: new Date()
    });
  }

}
