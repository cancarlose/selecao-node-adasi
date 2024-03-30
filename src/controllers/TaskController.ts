import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Tarefa } from "../entity/Task"

export class TaskController {

  private tarefaRepository = AppDataSource.getRepository(Tarefa)

    async all(request: Request, response: Response, next: NextFunction) {

        return this.tarefaRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
      const id = request.params.id
      
      const tarefa = await this.tarefaRepository.findOne({
          where: { id }
      })

      if (!tarefa) {
          response.status(404)
          return { 
              message: "Tarefa não registrado!" 
          
          }
      }
          return tarefa
    }

    async save(request: Request, response: Response, next: NextFunction) {
      const { nome } = request.body

      const tarefa = Object.assign(new Tarefa(), {
          nome
      })

      response.status(201)
      return this.tarefaRepository.save(tarefa)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const { nome } = request.body

        let tarefaToUpdate = await this.tarefaRepository.findOne({
            where: { id }
        })

        if (!tarefaToUpdate) {
            response.status(404)
            return {
                message: "Tarefa não encontrada!"
            }
        }

        this.tarefaRepository.merge(tarefaToUpdate, { 
            nome: nome
        });

        await this.tarefaRepository.save(tarefaToUpdate)

        response.status(200)
        return "Tarefa foi atualizada!"
   }

   async remove(request: Request, response: Response) {
    const id = request.params.id

    let tarefaToRemove = await this.tarefaRepository.findOne({
        where: { id }
    })

    if (!tarefaToRemove) {
        response.status(404)
        return {
            message: "Tarefa não encontrada!"
        }
    }

    await this.tarefaRepository.remove(tarefaToRemove)

    response.status(200)
    return "Tarefa foi excluido com sucesso!"    
   }
}