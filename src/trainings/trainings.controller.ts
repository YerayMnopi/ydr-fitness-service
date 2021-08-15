import { Controller, Get, Post, Body, UseGuards, Req, Put, Param, Delete } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { Training } from './training.entity';
import { JwtAuthGuard } from 'ydr-nest-common';
import { Request } from 'express';
import { DeleteResult } from 'typeorm';

@Controller('trainings')
export class TrainingsController {

  constructor(
    private readonly trainingsService: TrainingsService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Training[]> {
    return this.trainingsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') trainingId: string): Promise<Training> {
    return this.trainingsService.findById(trainingId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() request: Request): Promise<Training> {
    return this.trainingsService.create(request['user']['id']);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') trainingId: string): Promise<Training> {
    return this.trainingsService.update(trainingId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') trainingId: string): Promise<DeleteResult> {
    return this.trainingsService.delete(trainingId);
  }
}
