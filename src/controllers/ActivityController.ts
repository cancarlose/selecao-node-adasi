import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Atividade } from "../entity/Activity"
import { Estudante } from "../entity/Student"
import { Tarefa } from "../entity/Task"

export class ActivityController {

  private estudanteRepository = AppDataSource.getRepository(Estudante)

  private tarefaRepository = AppDataSource.getRepository(Tarefa)

  private atividadeRepository = AppDataSource.getRepository(Atividade)
  

    async all(request: Request, response: Response, next: NextFunction) {

        return this.atividadeRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
      const id = request.params.id
      
      const atividade = await this.atividadeRepository.findOne({
          where: { id }
      })

      if (!atividade) {
          response.status(404)
          return { 
              message: "Atividade não registrada!" 
          
          }
      }
          return atividade
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { tarefaId, estudanteId, data, horaAgendamentoInicio, horaAgendamentoTermino, horaInicio, horaTermino } = request.body
    
        if (horaAgendamentoTermino && horaAgendamentoInicio) {
            const horaInicioDate = new Date(`1970-01-01T${horaAgendamentoInicio}`);
            const horaTerminoDate = new Date(`1970-01-01T${horaAgendamentoTermino}`);
            
            const diferencaEmMilissegundos = horaTerminoDate.getTime() - horaInicioDate.getTime();
            const diferencaEmMinutos = diferencaEmMilissegundos / (1000 * 60);
            
            if (diferencaEmMinutos > 6 * 60) {
                response.status(404);
                return {
                    message: "A duração da atividade não pode ultrapassar 6 horas."
                };
            }
            
            const dataHoraInicio = new Date(`${data}T${horaInicio}`);
            const dataHoraTermino = new Date(`${data}T${horaTermino}`);
            
            if (dataHoraTermino < dataHoraInicio) {
                response.status(404);
                return {
                    message: "A hora de término não podem ser anteriores à data e hora de início."
                };
            }
            
            const diferencaMilissegundos = dataHoraInicio.getTime() - horaInicioDate.getTime();
            const diferencaMinutos = Math.abs(diferencaMilissegundos / (1000 * 60));

            if (diferencaMinutos > 15) {
                response.status(404)
                return {
                    message: "A atividade só pode ser iniciada com uma tolerância de 15 minutos para mais ou para menos."
                }
            }
    

            const findEstudante = await this.estudanteRepository.findOne({
                where: { id: estudanteId }
            });

            const findTarefa = await this.tarefaRepository.findOne({
                where: { id: tarefaId }
            });
        
            const atividade = Object.assign(new Atividade(), {
                tarefaId,
                estudanteId,
                data,
                horaAgendamentoInicio,
                horaAgendamentoTermino,
                horaInicio,
                horaTermino
            });
        
            response.status(201);
            return this.atividadeRepository.save(atividade);
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const { tarefa, estudante, data, horaAgendamentoInicio, horaAgendamentoTermino, horaInicio, horaTermino } = request.body

        let atividadeToUpdate = await this.atividadeRepository.findOne({
            where: { id }
        })

        if (!atividadeToUpdate) {
            response.status(404)
            return {
                message: "Atividade não encontrada!"
            }
        }

        this.atividadeRepository.merge(atividadeToUpdate, {
            tarefa,
            estudante,
            data,
            horaAgendamentoInicio,
            horaAgendamentoTermino,
            horaInicio,
            horaTermino
        })

        await this.atividadeRepository.save(atividadeToUpdate)

        response.status(200)
        return "Atividade foi atualizada!"
    }

    async remove(request: Request, response: Response) {
        const id = request.params.id
    
        let atividadeToRemove = await this.atividadeRepository.findOne({
            where: { id }
        })
    
        if (!atividadeToRemove) {
            response.status(404)
            return {
                message: "Atividade não encontrada!"
            }
        }
    
        await this.atividadeRepository.remove(atividadeToRemove)
    
        response.status(200)
        return "Atividade foi excluido com sucesso!"    
    }
}

