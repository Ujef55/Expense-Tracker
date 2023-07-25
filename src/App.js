import ExpenseItem from "./components/ExpenseItem.js";


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
      <ExpenseItem 
       title={expenses[0].title}
       amount={expenses[0].amount} 
       date={expenses[0].date}
       ></ExpenseItem>

      <ExpenseItem title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}
      ></ExpenseItem>
    </div>
  )
}

export default App;
