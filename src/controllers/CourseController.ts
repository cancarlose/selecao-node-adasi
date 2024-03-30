import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Curso } from "../entity/Course"


export class CourseController {

  private cursoRepository = AppDataSource.getRepository(Curso)

    async all(request: Request, response: Response, next: NextFunction) {

        return this.cursoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        
        const curso = await this.cursoRepository.findOne({
            where: { id }
        })

        if (!curso) {
            response.status(404)
            return { 
                message: "Curso não registrado!" 
            
            }
        }
            return curso
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { nome } = request.body

        const curso = Object.assign(new Curso(), {
            nome
        })

        response.status(201)
        return this.cursoRepository.save(curso)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const { nome } = request.body

        let cursoToUpdate = await this.cursoRepository.findOne({
            where: { id }
        })

        if (!cursoToUpdate) {
            response.status(404)
            return {
                message: "Curso não encontrado!"
            }
        }

        this.cursoRepository.merge(cursoToUpdate, { 
            nome: nome
        });

        await this.cursoRepository.save(cursoToUpdate)

        response.status(200)
        return "Curso foi atualizado!"
    }

    async remove(request: Request, response: Response) {
        const id = request.params.id

        let cursoToRemove = await this.cursoRepository.findOne({
            where: { id }
        })

        if (!cursoToRemove) {
            response.status(404)
            return {
                message: "Curso não encontrado!"
            }
        }

        await this.cursoRepository.remove(cursoToRemove)

        response.status(200)
        return "Curso foi excluido com sucesso!"    
    }
}

