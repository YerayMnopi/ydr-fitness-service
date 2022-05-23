import { Injectable } from "@nestjs/common";
import {EntityRepository, EntityManager} from "typeorm";

@Injectable()
@EntityRepository()
export class AnalyticsRepository {

    constructor(private manager: EntityManager) {
    }

    async averageWeightByExercise(userId: string): Promise<{[key: string]: number}> {
      return await this.manager.query(`
        SELECT 
          exercises.name as exercise, 
          round(MAX(sets.weight)) as max_weight
        FROM sets
        INNER JOIN executions
        ON sets."executionId" = executions.id
        INNER JOIN exercises 
        ON executions."exerciseId" = exercises.id
        WHERE sets."userId"='${userId}'
        GROUP BY exercises.id
        ORDER BY max_weight DESC;
      `);
    }


}