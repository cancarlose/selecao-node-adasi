import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Activities1711501276916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criar a tabela Atividade
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
            ],
            foreignKeys: [
                {
                    columnNames: ["tarefaId"],
                    referencedTableName: "Tarefa",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    columnNames: ["estudanteId"],
                    referencedTableName: "Estudante",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Excluir a tabela Atividade
        await queryRunner.dropTable("Atividade");
    }

}
