import { Request, Response } from 'express';
import { Tarefa } from '../models/task';

export const createTarefaController = async (req: Request, res: Response) => {
  try {
    const { nome } = req.body;
    const novaTarefa = await Tarefa.create({ nome });
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar a tarefa" });
  }
};

export const listTarefasController = async (req: Request, res: Response) => {
  try {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: "Tarefa não encontrada" });
  }
};

export const updateTarefaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const tarefa = await Tarefa.findOne({ where: { id } });
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    tarefa.nome = nome;
    await tarefa.save();
    res.json(tarefa);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteTarefaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findOne({ where: { id } });
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    await tarefa.remove();
    res.json({ mensagem: "Tarefa deletada com sucesso" });
  } catch (error) {
    res.status(400).json({ erro: "Erro ao tentar excluir" });
  }
};
