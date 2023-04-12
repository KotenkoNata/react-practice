import './ExpenseItem.css';
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import {useState} from "react";
function ExpenseItem({amount, title, date}) {
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const clickHandler = () => {
        setUpdatedTitle("Clicked")
    }

    return (
        <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{updatedTitle}</h2>
        </div>
        <div className='expense-item__price'>$ {amount}</div>
            <button onClick={clickHandler}> Change title </button>
        </Card>
    )
}

export default ExpenseItem;