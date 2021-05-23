import React from "react";
import "./ExpenseItem.css";

import { Expense } from "../../models/Expense.model";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem: React.FC<Expense> = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
