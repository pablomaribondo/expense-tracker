import React from "react";
import "./ExpenseItem.css";

type ExpenseItemProps = {
  date: Date;
  title: string;
  amount: number;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ date, title, amount }) => {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
