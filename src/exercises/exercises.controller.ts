import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { Exercise } from './exercise.entity';
import { JwtAuthGuard } from 'ydr-nest-common';
import { Request } from 'express';

@Controller('exercises')
export class ExercisesController {

    constructor(
        private readonly exercisesService: ExercisesService,
      ) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<Exercise[]> {
      return this.exercisesService.findAll();
    }
  
    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Req() request: Request): Promise<Exercise> {
      return this.exercisesService.create(
        request['user']['id'],
        request.body['name']
      );
    }
}
