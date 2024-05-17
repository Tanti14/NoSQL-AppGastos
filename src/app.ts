import express from "express";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import dotenv from "dotenv";
dotenv.config();

export const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);
