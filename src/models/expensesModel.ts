import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  user: {
    type: Object,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Expense", expenseSchema);
