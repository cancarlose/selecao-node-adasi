import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudante } from "./student";
import { Tarefa } from "./task";

@Entity("Atividade")
export class Atividade extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  nome: any;

  @ManyToOne(() => Tarefa, tarefa => tarefa.atividades)
  tarefa!: Tarefa[];

  @ManyToOne(() => Estudante, estudante => estudante.atividades)
  estudante!: Estudante;

  @Column({ type: "date" })
  data!: Date;

  @Column({ type: "time" })
  horaAgendamentoInicio!: Date;

  @Column({ type: "time" })
  horaAgendamentoTermino!: Date;

  @Column({ type: "time", nullable: true })
  horaInicio!: Date;

  @Column({ type: "time", nullable: true })
  horaTermino!: Date;
}
