import {MigrationInterface, QueryRunner} from "typeorm";

export class TUT1612463087420 implements MigrationInterface {
    name = 'TUT1612463087420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sets" ADD "timeUnderTension" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-04T18:24:47.611Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-03'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "timeUnderTension"`);
    }

}
