import {MigrationInterface, QueryRunner} from "typeorm";

export class timestampII1612741969038 implements MigrationInterface {
    name = 'timestampII1612741969038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT '"2021-02-07T23:52:49.159Z"'`);
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "updatedAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "executions" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "executions" ADD "createdAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "updatedAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "createdAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD "updatedAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD "createdAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "updatedAt" date NOT NULL DEFAULT '2021-02-07'`);
        await queryRunner.query(`ALTER TABLE "sets" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "sets" ADD "createdAt" date NOT NULL DEFAULT '2021-02-07'`);
    }

}
