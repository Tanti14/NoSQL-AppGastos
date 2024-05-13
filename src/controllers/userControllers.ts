import User from "../models/userModel";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Funca el endpoint" });
  } catch (error) {
    res.status(500).json({ message: "Error al traer los usuarios", error });
  }
};

export const getUserByDni = async (req: Request, res: Response) => {
  console.log("despues veo");
};

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const newUser = new User(data);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  console.log("despues veo");
};

export const deleteUser = async (req: Request, res: Response) => {
  console.log("despues veo");
};
