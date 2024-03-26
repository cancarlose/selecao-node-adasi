import express from "express";
import {
  createTarefaController,
  deleteTarefaController,
  listTarefasController,
  updateTarefaController
} from '../controller/taskController';

const router = express.Router();

router.post('/', createTarefaController);
router.get('/', listTarefasController);
router.put('/:id', updateTarefaController);
router.delete('/:id', deleteTarefaController);

export default router;