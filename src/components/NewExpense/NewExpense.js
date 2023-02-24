import React from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


export default function NewExpense (props) {
  const expenseSubmitHandler = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random().toString()
    }
    props.onSubmitExpense(expense)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmit={expenseSubmitHandler}/>
    </div>
  )
}