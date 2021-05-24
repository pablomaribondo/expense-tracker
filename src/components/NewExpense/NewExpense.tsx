import React, { useState } from "react";
import "./NewExpense.css";

import { Expense } from "../../models/Expense.model";
import ExpenseForm from "./ExpenseForm";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = ({
  onAddExpense,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (newExpenseData: Expense) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
