import { Request, Response } from "express";
import { Curso } from '../models/course';
import { Estudante } from '../models/studant';

export const createEstudanteController = async (req: Request, res: Response) => {
  try {
    const { cpf, nome, cursoId, matricula } = req.body;
    const curso = await Curso.findOne(cursoId);
    if (!curso) {
      return res.status(404).json({ erro: 'Curso não encontrado' });
    }
    const novoEstudante = await Estudante.create({ cpf, nome, curso, matricula });
    res.status(201).json(novoEstudante);
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Erro ao criar estudante" });
  }
};

export const listEstudantesController = async (req: Request, res: Response) => {
  try {
    const estudantes = await Estudante.find({ relations: ['curso'] });
    res.json(estudantes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Erro ao listar estudantes" });
  }
};

export const updateEstudanteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { cpf, nome, cursoId, matricula } = req.body;
    const estudante = await Estudante.findOne({ where: { id } });
    if (!estudante) {
      return res.status(404).json({ erro: 'Estudante não encontrado' });
    }
    estudante.cpf = cpf;
    estudante.nome = nome;
    estudante.matricula = matricula;
    await estudante.save();
    res.json(estudante);
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Erro ao atualizar estudante" });
  }
};

export const deleteEstudanteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const estudante = await Estudante.findOne({ where: { id } });
    if (!estudante) {
      return res.status(404).json({ erro: 'Estudante não encontrado' });
    }
    await estudante.remove();
    res.json({ mensagem: 'Estudante deletado com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Erro ao deletar estudante" });
  }
};
