import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Courses1711501252563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Curso",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "255"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("Curso");
    }

}
