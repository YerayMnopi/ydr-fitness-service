import {MigrationInterface, QueryRunner} from "typeorm";

export class userId1612337618326 implements MigrationInterface {
    name = 'userId1612337618326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sets" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-03T07:33:38.448Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "userId"`);
    }

}
