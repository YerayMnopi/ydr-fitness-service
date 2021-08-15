import { Module } from '@nestjs/common';
import { SetsService } from './sets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetEntity } from './set.entity';
import { SetsController } from './sets.controller';
import { ExecutionsModule } from '../execution/executions.module';

@Module({
  imports: [TypeOrmModule.forFeature([SetEntity]), ExecutionsModule],
  providers: [SetsService],
  controllers: [SetsController]
})
export class SetsModule {}
