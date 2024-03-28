import { Request, Response } from 'express';
import { Atividade } from '../models/activity';

export const createAtividadeController = async (req: Request, res: Response) => {
  try {
    const { nome } = req.body;
    const novaAtividade = await Atividade.create({ nome });
    res.status(201).json(novaAtividade);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar a atividade!" });
  }
};

export const listAtividadesController = async (_req: Request, res: Response) => {
  try {
    const atividades = await Atividade.find();
    res.status(200).json(atividades);
  } catch (error) {
    res.status(404).json({ erro: "Não há atividades!" });
  }
};

export const updateAtividadeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const atividade = await Atividade.findOne({ where: { id } })
    if (!atividade) {
      return res.status(404).json({ erro: "Atividade não encontrada" });
    }
    atividade.nome = nome;
    await atividade.save();
    res.status(200).json(atividade);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao tentar editar" });
  }
};

export const deleteAtividadeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const atividade = await Atividade.findOne({ where: { id } });
    if (!atividade) {
      return res.status(404).json({ erro: "Atividade não encontrada" });
    }
    await atividade.remove();
    res.status(200).json({ mensagem: "Atividade deletada com sucesso" });
  } catch (error) {
    res.status(400).json({ erro: "Erro ao tentar excluir" });
  }
};