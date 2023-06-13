import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


export default function ExpenseItem(props) {
  const { title, price, date } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">{price}</div>
    </div>
  );
}
