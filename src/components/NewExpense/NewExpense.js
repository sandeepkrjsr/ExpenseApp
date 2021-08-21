import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
    const [isExpenseForm, setIsExpenseForm] = useState(false);

    const saveExpenseHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsExpenseForm(false);
    }

    const showExpenseFormHandler = () => {
        setIsExpenseForm(true);
    }

    const hideExpenseFormHandler = () => {
        setIsExpenseForm(false);
    }

    return (
      <div className="new-expense">
        {isExpenseForm ? (
          <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={hideExpenseFormHandler}/>
        ) : (
          <button onClick={showExpenseFormHandler}>Add New Expense</button>
        )}
      </div>
    );
}

export default NewExpense;