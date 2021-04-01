import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1611366642618 implements MigrationInterface {
    name = 'initial1611366642618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trainings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" date NOT NULL DEFAULT '"2021-01-23T01:50:42.806Z"', "updatedAt" date NOT NULL DEFAULT '"2021-01-23T01:50:42.807Z"', "deletedAt" date, "userId" uuid NOT NULL, "finishedAt" date, CONSTRAINT "PK_b67237502b175163e47dc85018d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" date NOT NULL DEFAULT '"2021-01-23T01:50:42.806Z"', "updatedAt" date NOT NULL DEFAULT '"2021-01-23T01:50:42.807Z"', "deletedAt" date, "repetitions" numeric NOT NULL, "restSeconds" integer, "weight" numeric, "exerciseId" uuid, "trainingId" uuid, CONSTRAINT "PK_5d15ed8b3e2a5cb6e9c9921d056" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercises" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" date NOT NULL DEFAULT '"2021-01-23T01:50:42.806Z"', "updatedAt" date NOT NULL DEFAULT '"2021-01-23T01:50:42.807Z"', "deletedAt" date, "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255), CONSTRAINT "UQ_39b440305ccf965ef366de53ab8" UNIQUE ("slug"), CONSTRAINT "PK_c4c46f5fa89a58ba7c2d894e3c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_cca58e1bb2859ccf722d4633a1b" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sets" ADD CONSTRAINT "FK_8b63316209332445c0db04970dd" FOREIGN KEY ("trainingId") REFERENCES "trainings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_8b63316209332445c0db04970dd"`);
        await queryRunner.query(`ALTER TABLE "sets" DROP CONSTRAINT "FK_cca58e1bb2859ccf722d4633a1b"`);
        await queryRunner.query(`DROP TABLE "exercises"`);
        await queryRunner.query(`DROP TABLE "sets"`);
        await queryRunner.query(`DROP TABLE "trainings"`);
    }

}
