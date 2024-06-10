import express from "express";
import { addUser, deleteUser, getUsers, getUserById, updateUser } from "../controllers/UsuariosController.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
