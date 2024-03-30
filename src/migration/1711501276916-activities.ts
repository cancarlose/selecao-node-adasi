import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Activities1711501276916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Atividade",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "tarefaId",
                    type: "uuid"
                },
                {
                    name: "estudanteId",
                    type: "uuid"
                },
                {
                    name: "data",
                    type: "date"
                },
                {
                    name: "horaAgendamentoInicio",
                    type: "time"
                },
                {
                    name: "horaAgendamentoTermino",
                    type: "time"
                },
                {
                    name: "horaInicio",
                    type: "time",
                    isNullable: true
                },
                {
                    name: "horaTermino",
                    type: "time",
                    isNullable: true
                }
            ]
        }));

        await queryRunner.createForeignKey("Atividade", new TableForeignKey({
            columnNames: ["tarefaId"],
            referencedTableName: "Tarefa",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));

        await queryRunner.createForeignKey("Atividade", new TableForeignKey({
            columnNames: ["estudanteId"],
            referencedTableName: "Estudante",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Atividade");
    }
}

