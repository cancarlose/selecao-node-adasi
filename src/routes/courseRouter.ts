import express from "express";
import {
  createCursoController,
  deleteCursoController,
  listCursosController,
  updateCursoController
} from '../controller/courseController';

const router = express.Router();

router.post('/', createCursoController);
router.get('/', listCursosController);
router.put('/:id', updateCursoController);
router.delete('/:id', deleteCursoController);

export default router;