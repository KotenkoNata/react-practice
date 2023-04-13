import './ExpenseItem.css';
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import {useState} from "react";
function ExpenseItem({amount, title, date}) {

    return (
        <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>$ {amount}</div>
            <button> Change title </button>
        </Card>
    )
}

export default ExpenseItem;