import {MigrationInterface, QueryRunner} from "typeorm";

export class timestamp1612741250905 implements MigrationInterface {
    name = 'timestamp1612741250905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-02-07T23:40:51.089Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-04'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
    }

}
