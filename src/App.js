import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
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

  return (
    <div>
        <NewExpense />
        <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
