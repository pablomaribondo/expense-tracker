import React, { useState } from "react";
import "./ExpenseForm.css";

import { Expense } from "../../models/Expense.model";

const ExpenseForm: React.FC<{
  onSaveExpenseData: (expense: Expense) => void;
  onCancel: () => void;
}> = ({ onSaveExpenseData, onCancel }) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
