import { Request, Response } from 'express';
import { Curso } from '../models/course';

export const createCursoController = async (req: Request, res: Response) => {
  try {
    const { nome } = req.body;
    const novoCurso = await Curso.create({ nome });
    res.status(201).json(novoCurso);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar o curso" });
  }
};

export const listCursosController = async (req: Request, res: Response) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ erro: "Curso não encontrado" });
  }
};

export const updateCursoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const curso = await Curso.findOne({ where: { id } });
    if (!curso) {
      return res.status(404).json({ erro: "Curso não encontrado" });
    }
    curso.nome = nome;
    await curso.save();
    res.json(curso);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteCursoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findOne({ where: { id } });
    if (!curso) {
      return res.status(404).json({ erro: "Curso não encontrado" });
    }
    await curso.remove();
    res.json({ mensagem: "Curso deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ erro: "Erro ao tentar excluir" });
  }
};
