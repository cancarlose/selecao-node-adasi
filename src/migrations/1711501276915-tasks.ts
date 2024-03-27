import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Tasks1711501276915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criar a tabela Tarefa
        await queryRunner.createTable(new Table({
            name: "Tarefa",
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
        // Excluir a tabela Tarefa
        await queryRunner.dropTable("Tarefa");
    }
}
