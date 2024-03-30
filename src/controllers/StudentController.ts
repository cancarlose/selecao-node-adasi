import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Estudante } from "../entity/Student"
import { Curso } from "../entity/Course"
import { Atividade } from "../entity/Activity"

export class StudentController {

    private atividadeRepository = AppDataSource.getRepository(Atividade)

    private cursoRepository = AppDataSource.getRepository(Curso)

    private estudanteRepository = AppDataSource.getRepository(Estudante)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.estudanteRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        
        const estudante = await this.estudanteRepository.findOne({
            where: { id }
        })
        if (!estudante) {
            response.status(404)
            return { 
                message: "Estudante não registrado!" 
            
            }
        }
            return estudante
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { cpf, nome, cursoId, matricula, atividadeId } = request.body

        const findAtividade = await this.atividadeRepository.findOne({
            where: { id: atividadeId }
        })

        const findCurso = await this.cursoRepository.findOne({
            where: { id: cursoId }
        })

        const estudante = Object.assign(new Estudante(), {
            cpf,
            nome,
            cursoId,
            matricula,
            atividadeId
        })

        response.status(201)
        return this.estudanteRepository.save(estudante)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const { nome, cpf, cursoId, matricula, atividadeId } = request.body

        let estudanteToUpdate = await this.estudanteRepository.findOne({
            where: { id }
        })

        if (!estudanteToUpdate) {
            response.status(404)
            return {
                message: "Estudante não encontrado!"
            }
        }

        this.estudanteRepository.merge(estudanteToUpdate, { 
            nome: nome,
            cpf: cpf,
            curso: cursoId,
            matricula: matricula,
            atividades: atividadeId
        });

        await this.cursoRepository.save(estudanteToUpdate)

        response.status(200)
        return "Estudante foi atualizado!"
    }

    async remove(request: Request, response: Response) {
        const id = request.params.id

        let estudanteToRemove = await this.estudanteRepository.findOne({
            where: { id }
        })

        if (!estudanteToRemove) {
            response.status(404)
            return {
                message: "Estudante não encontrado!"
            }
        }

        await this.estudanteRepository.remove(estudanteToRemove)

        response.status(200)
        return "Estudante foi excluido com sucesso!"    
    }
}