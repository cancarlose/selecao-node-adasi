import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudante } from "./Student";

@Entity("Curso")
export class Curso {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @OneToMany(() => Estudante, estudante => estudante.curso)
  estudantes!: Estudante;
}
