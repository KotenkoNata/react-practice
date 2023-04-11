import './ExpenseItem.css';
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
function ExpenseItem({amount, title, date}) {

    return (
        <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>$ {amount}</div>
        </Card>
    )
}

export default ExpenseItem;