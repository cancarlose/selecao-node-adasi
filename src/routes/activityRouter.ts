import express from "express";
import {
  createAtividadeController,
  deleteAtividadeController,
  listAtividadesController,
  updateAtividadeController
} from '../controller/activityController';

const router = express.Router();

router.post('/', createAtividadeController);
router.get('/', listAtividadesController);
router.put('/:id', updateAtividadeController);
router.delete('/:id', deleteAtividadeController);

export default router;