import React  from 'react';
import ExpenseDate from './ExpenseDate' ;

export default function ExpenseItem(props) {
    const { title, price, date } = props;

    return (
        <div>
            <ExpenseDate date={date} />
            <div className="expense-item__title">
                {title}
            </div>
            <div className="expense-item__price">
                {price}
            </div>
        </div>
    )
}