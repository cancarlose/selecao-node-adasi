import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Students1711501252564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Estudante",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "cpf",
                    type: "varchar",
                    length: "11",
                    isUnique: true
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "cursoId",
                    type: "uuid"
                },
                {
                    name: "matricula",
                    type: "varchar",
                    length: "20",
                    isUnique: true
                }
            ]
        }));

        await queryRunner.createForeignKey("Estudante", new TableForeignKey({
            columnNames: ["cursoId"],
            referencedTableName: "Curso",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("Estudante", "cursoId");

        await queryRunner.dropTable("Estudante");
    }

}
