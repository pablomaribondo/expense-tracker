import React, { useState } from "react";
import "./Expenses.css";

import { Expense } from "../../models/Expense.model";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses: React.FC<{ items: Expense[] }> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState<string>("");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
