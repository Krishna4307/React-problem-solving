// ============================================
//             Task Requirements
// ============================================
// Todo List With Complete Functionality

// Build a todo application.

// Requirements:
// - Add a new task.
// - Display all tasks.
// - Mark a task as completed.
// - Completed tasks should have a line-through style.
// - Delete a particular task.
// - Don't allow empty tasks.


import { useState } from "react";
function Task8(){
    const[todos,setTodos]=useState([{
        id:"1",
        name:"Early Wake UP",
        status:false

    }]);
    const style1={
        textDecoration:"line-through",
        color:"grey"
    }

    const[addTodo,setAddTodo]=useState("");

    // ============================
    //     Add Task Logic
    // ============================

    function handleAddTodo(){
        if(addTodo===""){
            alert("Please add Task name! Required")
            return;
        }
        setTodos([...todos,{
            id:Date.now(),
            name:addTodo,
            status:false
        }])
        setAddTodo("")
    }

    // ============================
    //     Delete task Logic
    // ============================
    function handleDelete(id){
        const filterDeleteTodos=todos.filter((todo)=>{
            return todo.id!==id;
        })
        setTodos(filterDeleteTodos)
    }


    // =================================
    //     Updating Completed Tasks
    // =================================
    function handleComplete(id){
        let updatedTodo=todos.map((todo)=>{
            if(todo.id===id){
                return {...todo,status:true}
            }
            return todo;
        })
        setTodos(updatedTodo)
    }
    console.log(todos)

    // ====================================
    //     Displaying All Todos Logic
    // ====================================

    return(
        <>
            <h1>Task8</h1>
            <input type="text" value={addTodo} onChange={(e)=>{setAddTodo(e.target.value)}}/>
            <button onClick={handleAddTodo}>Add</button>
            <div>
                {todos.length===0?<h1>No Todos Added</h1>:todos.map((todo)=>(
                    <div key={todo.id}>
                        <p style={todo.status===true ? style1 :{}}>{todo.name}</p>
                        {todo.status===true?<button style={{cursor:"not-allowed",color:"gray"}}>Completed</button>:<button onClick={()=>{handleComplete(todo.id)}}>Complete</button>}
                        <button onClick={()=>{handleDelete(todo.id)}}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Task8;