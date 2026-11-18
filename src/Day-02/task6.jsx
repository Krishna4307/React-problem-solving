// ============================================
//             Task Requirements
// ============================================

import { useState } from "react";

// React Task 6: Password Validation

// Create a password validation component.

// Requirements:
// - Create a password input.
// - Password must contain at least 8 characters.
// - Display Weak Password if fewer than 8 characters.
// - Display Strong Password if 8 or more characters.
// - Show the validation message while typing.
// Use useState and conditional rendering.


function Task6(){
    const statement="password must contain atleast 8 characters"
    const[password,setPassword]=useState("");
    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter Your Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <p>{password.length>0?
                password.length<8?"Weak Password":"Strong Password! Accepted"
                :"Password Must contain Atleast 8 Characters"}</p>
        </div>
    )
}
export default Task6;