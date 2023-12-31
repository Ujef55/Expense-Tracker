import './ExpenseDate.css';

function ExpenseDate(props) {


  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: 'numeric'});
  const year = props.date.toLocaleString('en-US', {year: 'numeric'});

    return (
    <div className='expense-date'>
        <div className='expense-date-month'>{month}</div>
        <div className='expense-date-day'>{day}</div>
        <div className='expense-date-year'>{year}</div>
    </div>
    );
}

export default ExpenseDate;