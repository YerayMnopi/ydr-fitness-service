import {MigrationInterface, QueryRunner} from "typeorm";

export class onDelete1616367389048 implements MigrationInterface {
    name = 'onDelete1616367389048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_eb06edda1276419bb881a9f7455"`);
        await queryRunner.query(`ALTER TABLE "executions" DROP CONSTRAINT "FK_c7ce151ad93ea891e414863d14a"`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '"2021-03-21T22:56:29.352Z"'`);
        await queryRunner.query(`CREATE INDEX "IDX_264696c515efbaa9f2bd217862" ON "sets" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_adbccaa03aace385b09be0157c" ON "trainings" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e37f37f422796d689a7b3952c" ON "exercises" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c746960f44db10f2a8cd7d6d06" ON "executions" ("userId") `);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_eb06edda1276419bb881a9f7455" FOREIGN KEY ("executionId") REFERENCES "executions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "executions" ADD CONSTRAINT "FK_c7ce151ad93ea891e414863d14a" FOREIGN KEY ("trainingId") REFERENCES "trainings"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "executions" DROP CONSTRAINT "FK_c7ce151ad93ea891e414863d14a"`);
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_eb06edda1276419bb881a9f7455"`);
        await queryRunner.query(`DROP INDEX "IDX_c746960f44db10f2a8cd7d6d06"`);
        await queryRunner.query(`DROP INDEX "IDX_6e37f37f422796d689a7b3952c"`);
        await queryRunner.query(`DROP INDEX "IDX_adbccaa03aace385b09be0157c"`);
        await queryRunner.query(`DROP INDEX "IDX_264696c515efbaa9f2bd217862"`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "executions"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "exercises" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "exercises"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "trainings" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "trainings"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "updatedAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."updatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sets" ALTER COLUMN "createdAt" SET DEFAULT '2021-02-07 23:52:49.159'`);
        await queryRunner.query(`COMMENT ON COLUMN "sets"."createdAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "executions" ADD CONSTRAINT "FK_c7ce151ad93ea891e414863d14a" FOREIGN KEY ("trainingId") REFERENCES "trainings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_eb06edda1276419bb881a9f7455" FOREIGN KEY ("executionId") REFERENCES "executions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
