import { Controller, UseGuards, Get, Req, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'ydr-nest-common';
import { SetEntity } from './set.entity';
import { SetsService } from './sets.service';
import { Request } from 'express';

@Controller('sets')
export class SetsController {

    constructor(
        private readonly setsService: SetsService
    ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() request: Request): Promise<SetEntity> {
    return this.setsService.create(
      request['user']['id'],
      request.body
    );
  }

}
