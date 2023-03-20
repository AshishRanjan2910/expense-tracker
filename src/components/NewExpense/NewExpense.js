import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


export default function NewExpense (props) {
  const [editFlag, setEditFlag] = useState(false)

  const expenseSubmitHandler = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random().toString()
    }
    props.onSubmitExpense(expense)
  }

  const editHandler = () => {
    setEditFlag(true)
  }

  const cancelHandler = () => {
    setEditFlag(false)
  }

  return (
    <div className="new-expense">
      {!editFlag && <button onClick={editHandler}>Add an expense.</button>}
      {editFlag && <ExpenseForm onExpenseSubmit={expenseSubmitHandler} onCancel={cancelHandler}/>}
    </div>
  )
}