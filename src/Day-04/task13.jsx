// ============================================
//             Task Requirements
// ============================================

// Requirements:
// - Add an expense name.
// - Add an expense amount.
// - Display all expenses.
// - Delete individual expenses.
// - Calculate the total expenses.
// - Display the number of expenses.


import { useState } from "react";
function Task13(){
    const[expenses,setExpenses]=useState([]);
    const[expenseName,setExpenseName]=useState("");
    const[expenseAmount,setExpenseAmount]=useState("");

    function handleSubmitData(e){
        e.preventDefault();
        if(expenseName.length>0 && expenseAmount.length>0){

            setExpenses([...expenses,{
                id:Date.now(),
                name:expenseName[0].toUpperCase()+expenseName.slice(1),
                amount:Number(expenseAmount)
            }])
            setExpenseName("")
            setExpenseAmount("")
        }
        else{
            alert("Name & Amount Required")
        }
    }

    function handleDeleteExpense(id){
        const filterDeletedExpenses=expenses.filter((expense)=>{
            return expense.id!==id;
        })
        console.log(filterDeletedExpenses)
        setExpenses(filterDeletedExpenses)
    }

    const totalExpenses=expenses.reduce((acc,expense)=>{
        return acc+=expense.amount
    },0)
    return(
        <>
            <p>No.of Expense : {expenses.length}</p>
            <p>Total Expense : {totalExpenses}</p>
            <form onSubmit={handleSubmitData}>
                <input type="text" 
                    placeholder="Enter an Expense name" 
                    value={expenseName} onChange={(e)=>{setExpenseName(e.target.value)}}/>

                <input type="text" 
                    placeholder="Enter an Expense Amount" 
                    value={expenseAmount} onChange={(e)=>{setExpenseAmount(e.target.value)}}/>

                <button>Submit</button>
            </form>
            {expenses.length>0?expenses.map((expense)=>(
                <div key={expense.id}>
                    <p>{expense.name} - {expense.amount}</p>
                    <button onClick={()=>{handleDeleteExpense(expense.id)}}>Delete</button>
                </div>
            )):<h3>No Expenses Added</h3>}
            {console.log(expenses)}
        </>
    )
}
export default Task13;