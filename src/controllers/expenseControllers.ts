import Expense from "../models/expensesModel";
import User from "../models/userModel";
import { Request, Response } from "express";

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { title, description, amount, user } = req.body;

    const userMatch = await User.findOne({ dni: user });

    if (!title || !description || !amount || !user) {
      res
        .status(400)
        .json({ message: "Por favor, complete los campos obligatorios" });
      return;
    }

    if (!userMatch) {
      res.status(400).json({ message: "El usuario no existe" });
      return;
    }

    const newExpense = new Expense({
      title,
      description,
      amount,
      user: {
        dni: userMatch.dni,
        name: userMatch.name,
        email: userMatch.email,
      },
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Error al traer los gastos", error });
  }
};
