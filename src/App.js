import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

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
    <div className="App">
        {expenses.map(item=><ExpenseItem key={item.id}
                                         amount={item.amount}
                                         date={item.date}
                                         title={item.title}/>)}
    </div>
  );
}

export default App;
