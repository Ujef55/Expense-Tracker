import NewExpenses from "./components/NewExpenses/NewExpenses.js";
import Expenses from "./components/Expenses/Expenses.js";



function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Bought a new phone',
      amount: 422.89,
      date: new Date(2022, 3, 25),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Laptop',
      amount: 620.58,
      date: new Date(2022, 11, 10),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpenses />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
