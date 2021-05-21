import React, { useState } from "react";
import "./Expenses.css";

import { Expense } from "../../models/Expense.model";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses: React.FC<{ items: Expense[] }> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState<string>("");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
};

export default Expenses;
