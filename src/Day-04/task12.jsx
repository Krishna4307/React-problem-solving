// ============================================
//             Task Requirements
// ============================================

// Requirements:
// - Add students using an input field.
// - Display all students.
// - Delete a particular student.
// - Prevent empty student names.
// - Assign a unique ID to each student.


import { useState } from "react";
function Task12(){
    const[students,setStudents]=useState([]);
    const[newStudent,setNewStudent]=useState("");

    function handleAddStudent(){
        if(newStudent.length===0){
            alert("Name Required")
            return;
        }
        setStudents([...students,{
            id:Date.now(),
            name:newStudent[0].toUpperCase()+newStudent.slice(1)
        }])
        setNewStudent("")
    }

    function handleDeleteStudent(id){
        const filterDeletedStudents=students.filter((student)=>{
            return student.id!==id;
        })
        console.log(filterDeletedStudents)
        setStudents(filterDeletedStudents)
    }

    return(
        <>
            <input type="text" placeholder="Enter a student name" value={newStudent} onChange={(e)=>{setNewStudent(e.target.value)}}/>
            <button onClick={handleAddStudent}>Add Student</button>
            {students.length>0?students.map((student)=>(
                <div key={student.id}>
                    <p>{student.name}</p>
                    <button onClick={()=>{handleDeleteStudent(student.id)}}>Delete</button>
                </div>
            )):<h3>No Student Added</h3>}
            {console.log(students)}
        </>
    )
}
export default Task12;