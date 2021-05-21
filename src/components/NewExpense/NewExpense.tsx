import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense: React.FC = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
