import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(item=>{
        return item.date.getFullYear().toString() === filteredYear;
    })

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </li>
    )
}

export default Expenses;