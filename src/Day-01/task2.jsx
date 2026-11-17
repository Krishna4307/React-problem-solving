import { useState } from "react";

function Task2(){
    let password="Krishna@123";
    const[visible,setVisible]=useState(true);
    return(
        <>
            <h1>Task 2</h1>
            {visible?<input type="text" value={password}/> :<input type="password" value={password}/> }
            <button onClick={()=>{
                setVisible(!visible)
            }}>{visible?"Hide":"Show"}</button>
        </>
    )
}
export default Task2;