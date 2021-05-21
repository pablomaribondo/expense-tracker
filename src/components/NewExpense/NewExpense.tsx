import React from "react";
import "./NewExpense.css";

import { Expense } from "../../models/Expense.model";
import ExpenseForm from "./ExpenseForm";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = ({
  onAddExpense,
}) => {
  const saveExpenseDataHandler = (newExpenseData: Expense) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
