import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./activity";
import { Curso } from "./course";


@Entity("Estudante")
export class Estudante extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 11, unique: true })
  cpf!: string;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @ManyToOne(() => Curso, curso => curso.estudantes)
  curso!: Curso;

  @Column({ type: "varchar", length: 5, unique: true })
  matricula!: string;

  @OneToMany(() => Atividade, atividade => atividade.estudante)
  atividades!: Atividade[];
}