import {MigrationInterface, QueryRunner} from "typeorm";

export class executions1611433056040 implements MigrationInterface {
    name = 'executions1611433056040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_cca58e1bb2859ccf722d4633a1b"`);
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_8b63316209332445c0db04970dd"`);
        await queryRunner.query(`CREATE TABLE "executions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" date NOT NULL DEFAULT '"2021-01-23T20:17:36.157Z"', "updatedAt" date NOT NULL DEFAULT '"2021-01-23T20:17:36.157Z"', "deletedAt" date, "volume" numeric, "exerciseId" uuid, "trainingId" uuid, CONSTRAINT "PK_703e64e0ef651986191844b7b8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "exerciseId"`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "trainingId"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "executionId" uuid`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '"2021-01-23T20:17:36.157Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-01-23T20:17:36.157Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '"2021-01-23T20:17:36.157Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-01-23T20:17:36.157Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '"2021-01-23T20:17:36.157Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-01-23T20:17:36.157Z"'`);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_eb06edda1276419bb881a9f7455" FOREIGN KEY ("executionId") REFERENCES "executions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "executions" ADD CONSTRAINT "FK_073f9514d3f21dcf60c84c01842" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "executions" ADD CONSTRAINT "FK_c7ce151ad93ea891e414863d14a" FOREIGN KEY ("trainingId") REFERENCES "trainings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "executions" DROP CONSTRAINT "FK_c7ce151ad93ea891e414863d14a"`);
        await queryRunner.query(`ALTER TABLE "executions" DROP CONSTRAINT "FK_073f9514d3f21dcf60c84c01842"`);
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_eb06edda1276419bb881a9f7455"`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '2021-01-23'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "executionId"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "trainingId" uuid`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "exerciseId" uuid`);
        await queryRunner.query(`DROP TABLE "executions"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_8b63316209332445c0db04970dd" FOREIGN KEY ("trainingId") REFERENCES "trainings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_cca58e1bb2859ccf722d4633a1b" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
