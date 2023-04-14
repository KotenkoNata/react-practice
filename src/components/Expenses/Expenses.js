import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";

function Expenses({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(item=>{
        return item.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>;
    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses
            .map( item => <ExpenseItem key={item.id}
                                       amount={item.amount}
                                       date={item.date}
                                       title={item.title}/>)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses;