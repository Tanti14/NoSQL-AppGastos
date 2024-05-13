import { Router } from "express";
import {
  getUsers,
  getUserByDni,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserByDni);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;