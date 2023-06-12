import React from 'react';
import ExpenseItem from './components/ExpenseItem';


export default function App() {
  const expenses = [
    {
      title: "Washing Machine",
      price: "2500",
      date: new Date(2021, 10, 6)
    },
    {
      title: "Mobile Phone",
      price: "2100",
      date: new Date(2022, 10, 6)
    },
    {
      title: "Toys",
      price: "780",
      date: new Date(2023, 1, 6)
    },
  ]
  return (
    <div>
      Hello
      <h1>Expense List</h1>
      {expenses.map((item) => {
        return <ExpenseItem title={item.title}></ExpenseItem> })
      }
    </div>
  )
}


