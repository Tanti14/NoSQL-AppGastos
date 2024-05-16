import User from "../models/userModel";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Funca el endpoint", users });
  } catch (error) {
    res.status(500).json({ message: "Error al traer los usuarios", error });
  }
};

export const getUserByDni = async (req: Request, res: Response) => {
  const { dni } = req.params;
  try {
    const user = await User.findOne({ dni: dni });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error al traer el usuario", error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const match = await User.findOne({ dni: data.dni });
    if (match) {
      res.status(400).json({ message: "El usuario ya existe" });
      return;
    }
    const newUser = new User(data);

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const data = req.body;

    const newUserData = await User.findOneAndUpdate({ dni: dni }, data, {
      new: true,
    });

    if (!newUserData) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.status(200).json(newUserData);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const user = await User.findOneAndDelete({ dni: dni });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};
