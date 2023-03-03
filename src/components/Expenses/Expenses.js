import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

export default function ExpenseAligner(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2019");

  const yearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        yearSelected={filteredYear}
        onYearSelect={yearSelectHandler}
      />
      {expenses
        .filter((expense) => {
          return expense.date.getFullYear() === parseInt(filteredYear)
        })
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}
