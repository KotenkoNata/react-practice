import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from "../Card/Card";

function Expenses({expenses}) {
    return (
        <Card className="expenses">
            {expenses.map(item=><ExpenseItem key={item.id}
                                             amount={item.amount}
                                             date={item.date}
                                             title={item.title}/>)}
        </Card>
    )
}

export default Expenses;