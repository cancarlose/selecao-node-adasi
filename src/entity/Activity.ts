import { Tarefa } from "./Task";
import { Estudante } from "./Student";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity("Atividade")
export class Atividade {
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

  @BeforeInsert()
  @BeforeUpdate()
    formatarData() {
      this.data = this.data.split('.').reverse().join('-');
  }
}

