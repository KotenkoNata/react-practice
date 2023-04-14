import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css'

const ExpensesList = ({items}) => {
    let expensesContent = <p>No expenses found.</p>;
    if(items.length === 0){
        return <h2 className="expenses-list__fallback">Found no component</h2>
    }
    return <ul className="expenses-list">
        {items
            .map( item => <ExpenseItem key={item.id}
                                       amount={item.amount}
                                       date={item.date}
                                       title={item.title}/>)}
        </ul>
}

export default ExpensesList;