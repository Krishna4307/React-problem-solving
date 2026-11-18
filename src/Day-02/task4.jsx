// ==================================================
//             Task Requirements
// ==================================================
// React Task 4: Add and Remove Items

// Create a simple shopping list application.

// Requirements:
// - Create an input field.
// - Add a button to add items.
// - Display all added items.
// - Add a delete button beside every item.
// - Don't allow empty items.
// - Clear the input after adding an item.

import { useState } from "react";

function Task4(){
    const[input,setInput]=useState("");
    const[items,setItems]=useState([]);

    const handleAdd=()=>{
        if(input===""){
            alert("Item Name Required")
            return;
        }
        setItems([...items,{
            id:Date.now(),
            name:input[0].toUpperCase()+input.slice(1)
        }])
        setInput("")
    }
    return(
        <>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={handleAdd}>Add</button>
            {items.length===0? <h2>No Items Added</h2> : items.map((item)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <button onClick={()=>{
                        let filteredItems=items.filter((item2)=>item2.id!==item.id)
                        setItems(filteredItems)
                    }}>Delete</button>
                </div>
            ))}
        </>
    )
}
export default Task4;