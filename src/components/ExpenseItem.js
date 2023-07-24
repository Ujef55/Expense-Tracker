import './ExpenseItem.css';

function ExpenseItem() {
    return (
      <div className="expense-item">
        <div>April 25th 2022</div>
        <div className="expense-item-description">
            <h2>Bought a new phone</h2>
            <div className="expense-item-price">$422.89</div>
        </div>
      </div>
    );
  }

export default ExpenseItem;