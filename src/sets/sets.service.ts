import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetEntity } from './set.entity';
import { SetCreatePayload } from './set-create-payload';
import { Repository } from 'typeorm';
import { ExecutionsService } from 'src/execution/executions.service';


@Injectable()
export class SetsService {

    constructor(
        @InjectRepository(SetEntity)
        private readonly setsRepository: Repository<SetEntity>,
        private readonly executionService: ExecutionsService
      ) {}

  async create(userId: string, setEntity: SetCreatePayload): Promise<SetEntity | undefined> {
    const {executionId, ...payload} = setEntity;
    const execution = await this.executionService.findById(executionId);
    return this.setsRepository.save({
      userId,
      execution,
      ...payload,
      createdAt: new Date()
    });
  }

}
