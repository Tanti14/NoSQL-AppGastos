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
router.get("/:dni", getUserByDni);
router.post("/", createUser);
router.put("/:dni", updateUser);
router.delete("/:dni", deleteUser);

export default router;
