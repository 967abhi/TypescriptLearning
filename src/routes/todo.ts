import { Router } from "express";
import {createtodo} from "../controllers/todo.ts"

const router=Router();
router.post("/create",createtodo)
router.get("/");
router.patch('/:id');
router.delete('/:id');
export default router; 