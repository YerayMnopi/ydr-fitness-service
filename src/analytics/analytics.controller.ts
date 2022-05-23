import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'ydr-nest-common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {

  constructor(
    private readonly analyticsService: AnalyticsService
  ) {}

  @Get('average-weight-by-exercise')
  @UseGuards(JwtAuthGuard)
  async getAverageWeightByExercise(@Req() request: Request): Promise<{[key: string]: number}> {
    return this.analyticsService.getAverageWeightByExercise(request['user']['id']);
  }

}
