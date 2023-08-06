import NewExpensesForm from './NewExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) => {

    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }


    return (
        <div className='new-expense'>
            <NewExpensesForm onSaveExpenseData={saveExpenseDateHandler} />
        </div>  
    )
}

export default NewExpenses;