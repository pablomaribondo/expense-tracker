import React from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import { Expense } from "../models/ExpenseItem.model";

const ExpenseItem: React.FC<Expense> = ({ date, title, amount }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
