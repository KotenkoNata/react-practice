import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const INITIAL_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94,
        date: new Date(2023, 3, 8),
    },
    {
        id: "e2",
        title: "Car insurance",
        amount: 294,
        date: new Date(2023, 2, 2),
    }
]

function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const addExpenseHandler = (expense) =>{
        setExpenses((prevState)=>{
            return [expense, ...prevState]
        });
    }

  return (
    <div>
        <NewExpense  onAddExpense = {addExpenseHandler}/>
        <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
