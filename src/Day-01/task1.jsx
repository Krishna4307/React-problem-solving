import { useState } from "react";

function Task1(){
    const[counter,setCounter]=useState(0);
    return(
        <>
            <h1>Task 1</h1>
           <button onClick={()=>{setCounter(counter-1)}}>Decrease</button>
           <h1>{counter}</h1>
           <button onClick={()=>{setCounter(counter+1)}}>Increase</button>
           <button onClick={()=>{setCounter(0)}}>Reset</button>
        </>
    )
}
export default Task1;