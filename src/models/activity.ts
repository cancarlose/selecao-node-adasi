import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudante } from "./student";
import { Tarefa } from "./task";

@Entity("Atividade")
export class Atividade extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  nome: any;

  @ManyToOne(() => Tarefa, tarefa => tarefa.atividades)
  tarefa!: Tarefa;

  @ManyToOne(() => Estudante, estudante => estudante.atividades)
  estudante!: Estudante;

  @Column({ type: "date" })
  data!: string;

  @Column({ type: "time" })
  horaAgendamentoInicio!: string;

  @Column({ type: "time" })
  horaAgendamentoTermino!: string;

  @Column({ type: "time", nullable: true })
  horaInicio!: string;

  @Column({ type: "time", nullable: true })
  horaTermino!: string;
}
