import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Activity";

@Entity("Tarefa")
export class Tarefa {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @OneToMany(() => Atividade, atividade => atividade.tarefa)
  atividades!: Atividade;
}
