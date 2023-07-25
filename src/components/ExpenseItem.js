import './ExpenseItem.css';

function ExpenseItem() {

    const ExpenseDate = new Date(2022, 3, 25);
    const expenseTitle = 'Bought a new phone';
    const expenseAmount = 422.89;

    return (
      <div className="expense-item">
        <div>{ExpenseDate.toLocaleDateString()}</div>
        <div className='expense-item-description'>
          <h2>{expenseTitle}</h2>
          <div className='expense-item-price'>{expenseAmount}</div>
        </div>
      </div>
    );
  }

export default ExpenseItem;