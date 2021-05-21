import React from "react";
import "./ExpenseItem.css";

const ExpenseItem: React.FC = () => {
  const expenseDate = new Date(2021, 5, 21);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 525.21;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
