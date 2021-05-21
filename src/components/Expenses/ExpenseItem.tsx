import React, { useState } from "react";
import "./ExpenseItem.css";

import { Expense } from "../../models/ExpenseItem.model";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem: React.FC<Expense> = ({ date, title, amount }) => {
  const [expenseTitle, setExpenseTitle] = useState<string>(title);

  const onClickHandler = () => {
    setExpenseTitle("uiu");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
