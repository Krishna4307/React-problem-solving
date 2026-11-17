import { useState } from "react";

function Task3(){
    const[character,setCharacter]=useState("");
    return(
        <>
            <h1>Task 03</h1>
            <textarea cols={50} rows={4} value={character} maxLength="100" onChange={(e)=>{setCharacter(e.target.value)}}/>
            {character.length>=100 && <p style={{color:"red"}}>Max Limit Of Characters Exceeded :100</p>}
            <p><strong>Total Characters Entered : </strong>{character.length}</p>
            {console.log(character)}
        </>
    )
}
export default Task3;