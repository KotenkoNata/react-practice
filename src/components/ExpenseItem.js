import './ExpenseItem.css';
function ExpenseItem({amount, title, date}) {

    return <div className='expense-item'>
        <div>{date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>{amount}</div>
    </div>
}

export default ExpenseItem;