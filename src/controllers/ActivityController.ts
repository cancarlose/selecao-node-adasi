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

        interface Atividade {
            horaInicioAgendada: any
            horaInicio: Date;
            horaTermino: Date;
            horaAgendamentoInicio?: Date;
            horaAgendamentoTermino?: Date;
            horaInicioReal?: Date;
        }
        
        class AtividadeService {
            validarDuracao(atividade: Atividade): boolean {
                const duracaoMax = atividade.horaTermino.getTime() - atividade.horaInicio.getTime()
                const duracaoHoras = duracaoMax / (1000 * 60 * 60)
        
                return duracaoHoras <= 6
            }
        
            validarDataHora(atividade: Atividade): boolean {
                return atividade.horaTermino > atividade.horaInicio
            }
        
            validarToleranciaInicio(atividade: Atividade): boolean {
                const diffMs = Math.abs((atividade.horaInicioReal || atividade.horaInicio).getTime() - atividade.horaInicioAgendada.getTime())
                const tempoMin = diffMs / (1000 * 60)
        
                return tempoMin <= 15
            }
        
            validar(atividade: Atividade): string | null {
                if (!this.validarDuracao(atividade)) {
                    return "A duração da atividade não pode ultrapassar 6 horas."
                }
        
                if (!this.validarDataHora(atividade)) {
                    return "A data e hora de término não podem ser anteriores à data e hora de início."
                }
        
                if (!this.validarToleranciaInicio(atividade)) {
                    return "A atividade só pode ser iniciada com uma tolerância de 15 minutos para mais ou para menos."
                }
        
                return
            }
        }

        const findEstudante = await this.estudanteRepository.findOne({
        where: { id: estudanteId }
        })

        const findTarefa = await this.tarefaRepository.findOne({
        where: { id: tarefaId }
        })

        const atividade = Object.assign(new Atividade(), {
            tarefaId,
            estudanteId,
            data,
            horaAgendamentoInicio,
            horaAgendamentoTermino,
            horaInicio,
            horaTermino
        })

        response.status(201)
        return this.atividadeRepository.save(atividade)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const { tarefaId, estudanteId, data, horaAgendamentoInicio, horaAgendamentoTermino, horaInicio, horaTermino } = request.body

        let atividadeToUpdate = await this.atividadeRepository.findOne({
            where: { id }
        })

        if (!atividadeToUpdate) {
            response.status(404)
            return {
                message: "Atividade não encontrada!"
            }
        }

        const atividade = Object.assign(new Atividade(), {
            tarefaId,
            estudanteId,
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
