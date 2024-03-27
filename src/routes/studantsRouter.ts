import express from "express";
import {
  createEstudanteController,
  deleteEstudanteController,
  listEstudantesController,
  updateEstudanteController
} from '../controller/studentController';

const router = express.Router();

router.post('/', createEstudanteController);
router.get('/', listEstudantesController);
router.put('/:id', updateEstudanteController);
router.delete('/:id', deleteEstudanteController);

export default router;
