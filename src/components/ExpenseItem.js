import './ExpenseItem.css';

function ExpenseItem(props) {

    // const ExpenseDate = new Date(2022, 3, 25);
    // const expenseTitle = 'Bought a new phone';
    // const expenseAmount = 422.89;

    return (
      <div className="expense-item">
        <div>{props.date.toDateString()}</div>
        <div className='expense-item-description'>
          <h2>{props.title}</h2>
          <div className='expense-item-price'>{props.amount}</div>
        </div>
      </div>
    );
  }

export default ExpenseItem;