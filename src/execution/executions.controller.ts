import { Controller, Get, Post, Body, UseGuards, Req, Put, Param } from '@nestjs/common';
import { ExecutionsService } from './executions.service';
import { Execution } from './execution.entity';
import { JwtAuthGuard } from 'ydr-nest-common';
import { Request } from 'express';

@Controller('executions')
export class ExecutionsController {

  constructor(
    private readonly executionsService: ExecutionsService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Execution[]> {
    return this.executionsService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() request: Request): Promise<Execution> {
    return this.executionsService.create(
      request['user']['id'],
      request.body['trainingId'],
      request.body['exerciseId'],
    );
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async update(@Param() executionId: string): Promise<Execution> {
    return this.executionsService.update(executionId);
  }
}
