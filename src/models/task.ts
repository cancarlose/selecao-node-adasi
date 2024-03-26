import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./activity";

@Entity("Tarefa")
export class Tarefa extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @OneToMany(() => Atividade, atividade => atividade.tarefa)
  atividades!: Atividade[];
}
