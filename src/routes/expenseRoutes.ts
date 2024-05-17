import { Router } from "express";
import {
  /* getExpenses, */
/*   getUserByDni, */
  createExpense,
/*   updateUser,
  deleteUser, */
} from "../controllers/expenseControllers";

const router = Router();

/* router.get("/", getExpenses); */
/* router.get("/:dni", getUserByDni); */
router.post("/", createExpense);
/* router.put("/:dni", updateUser); */
/* router.delete("/:dni", deleteUser); */

export default router;