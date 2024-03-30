import "reflect-metadata"
import { DataSource } from "typeorm"
import { Curso } from "./entity/Course"
import { Estudante } from "./entity/Student"
import { Tarefa } from "./entity/Task"
import { Atividade } from "./entity/Activity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "livraria",
    synchronize: true,
    logging: false,
    entities: [Curso, Estudante, Atividade, Tarefa],
    migrations: ["./src/migrations/*.ts"],
    subscribers: [],
})
