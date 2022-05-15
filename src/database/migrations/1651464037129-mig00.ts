import {MigrationInterface, QueryRunner} from "typeorm";

export class mig001651464037129 implements MigrationInterface {
    name = 'mig001651464037129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "make" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "model" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "size" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "genderUsage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "identifier" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "production_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "imageUrl" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "imageUrl" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "production_date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "identifier" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "genderUsage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "size" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "model" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "make" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "brand" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "name" SET NOT NULL`);
    }

}
