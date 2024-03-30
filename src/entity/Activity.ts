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
  validarAtividade() {
    const tolerancia = 15 * 60 * 1000;
    const duracaoMaxima = 6 * 60 * 60 * 1000;

    const horaInicioMs = new Date(this.horaInicio).getTime()
    const horaTerminoMs = new Date(this.horaTermino).getTime()

    const duracao = horaTerminoMs - horaInicioMs;
    if (duracao > duracaoMaxima) {
      throw new Error("A duração da atividade não pode ultrapassar 6 horas.");
    }

    if (horaTerminoMs < horaInicioMs) {
      throw new Error("Data e hora de término não podem ser anteriores à data e hora de início.");
    }

    const horaAtualMs = new Date().getTime();
    const diferencaInicio = Math.abs(horaInicioMs - horaAtualMs);
    if (diferencaInicio > tolerancia) { 
      throw new Error("A atividade só pode ser iniciada com uma tolerância de 15 minutos para mais ou para menos.");
    }   
  }
}

