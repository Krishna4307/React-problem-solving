// ============================================
//             Task Requirements
// ============================================

import { useState } from "react"

// React Task 5: Toggle Dark and Light Mode

// Create a small application with a theme toggle button.

// Requirements:
// - Initially display light mode.
// - Clicking the button changes to dark mode.
// - Clicking again changes back to light mode.
// - Change the background and text colors.
// - Display the current theme name.
// Use useState and event handling.
function Task5(){
    
    const[toggle,setToggle]=useState(true)

    return(
        <div>
            <button onClick={()=>{
                setToggle(!toggle)
                
                if(toggle){
                    document.body.style.backgroundColor="black"
                    document.body.style.color="white"
                }
                else{
                    document.body.style.backgroundColor="white"
                    document.body.style.color="black"
                }
                
            }}>{toggle?"Change to Dark":"Change to Light"}</button>
            <h1>Theme Name : {toggle?"Light":"Dark"}</h1>
        </div>
    )
}
export default Task5