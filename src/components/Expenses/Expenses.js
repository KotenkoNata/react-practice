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
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenses.map(item => <ExpenseItem key={item.id}
                                             amount={item.amount}
                                             date={item.date}
                                             title={item.title}/>)}
        </Card>
    )
}

export default Expenses;