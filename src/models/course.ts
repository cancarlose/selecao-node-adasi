import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudante } from "./studant";

@Entity("Curso")
export class Curso extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @OneToMany(() => Estudante, estudante => estudante.curso)
  estudantes!: Estudante[];
}
