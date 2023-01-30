import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm  from "./ExpenseForm";





const NewExpense = (props) => {
  const [IsEditing,setIsEditing] = useState(false);

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    props.onAddExpense(enteredExpenseData);
    console.log(enteredExpenseData)
    setIsEditing(false);

    };
    const startEditingHandler = ()=>{
      setIsEditing(true);
    };

    const stopEditingHandler = ()=>{
      setIsEditing(false);
    };

  return (

    <div className="new-expense">
      {! IsEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {IsEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
      />}
  </div>
  )
  

  };
export default NewExpense;
