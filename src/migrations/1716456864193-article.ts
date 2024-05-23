import { MigrationInterface, QueryRunner } from 'typeorm';

export class article1716456864193 implements MigrationInterface {
  name = ' article1716456864193';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "articles" (
            "id" SERIAL NOT NULL,
            "slug" character varying NOT NULL,
            "title" character varying NOT NULL,
            "description" character varying NOT NULL DEFAULT '',
            "body" character varying NOT NULL DEFAULT '',
            "tagList" text NOT NULL,
            "favoritesCount" integer NOT NULL DEFAULT '0',
            "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
            CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "articles"`);
  }
}
