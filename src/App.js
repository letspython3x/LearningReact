import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./components/Expenses.css";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Washing Machine",
      price: "2500",
      date: new Date(2021, 10, 6),
    },
    {
      id: "e2",
      title: "Mobile Phone",
      price: "2100",
      date: new Date(2022, 10, 6),
    },
    {
      id: "e3",
      title: "Toys",
      price: "780",
      date: new Date(2023, 1, 6),
    },
  ];
  console.log(expenses);

  return (
    <div>
      <h1>Expense List</h1>
      <div className="expenses">
        {expenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              price={item.price}
              date={item.date}
            ></ExpenseItem>
          );
        })}
      </div>
    </div>
  );
}
