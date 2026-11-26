// ============================================
//             Task Requirements
// ============================================

// Requirements:
// 1. Display all employees.
// 2. Provide Present and Absent buttons for each employee.
// 3. Update the employee's status when a button is clicked.
// 4. Allow changing the status from Present to Absent and vice versa.
// 5. Display total Present employees.
// 6. Display total Absent employees.
// 7. Display total employees not yet marked.
// 8. Add filters: All, Present, Absent, Not Marked.

// Expected Ouptu:-
 
// Initally : {
//   totalEmployees: 4,
//   present: 0,
//   absent: 0,
//   notMarked: 4
// }

// After marking Rahul Present and Priya Absent:
// {
//   totalEmployees: 4,
//   present: 1,
//   absent: 1,
//   notMarked: 2
// }


import { useState } from "react";
const employeesArr = [
  { id: 1, name: "Rahul", status: "Not Marked" },
  { id: 2, name: "Priya", status: "Not Marked" },
  { id: 3, name: "Arjun", status: "Not Marked" },
  { id: 4, name: "Sneha", status: "Not Marked" }
];
function Task17(){
    const[employees,setEmployees]=useState(employeesArr)
    const present =employees.filter((emp)=>emp.status==="Present")
    const absent=employees.filter((emp)=>emp.status==="Absent")
    const noMark=employees.filter((emp)=>emp.status==="Not Marked")
    const data=
        {
            totalEmployees:employees.length,
            Presented:present.length,
            Absented:absent.length,
            NotMarked:noMark.length
        }

    // ==========================================
    //         status Change to Present Logic
    // ==========================================

        function handlePresent(id){
            const updateEmployees=employees.map((emp)=>{
                if(emp.id===id){
                    if(emp.status==="Not Marked" || emp.status==="Absent"){
                        return {...emp,status:"Present"}
                    }
                    else{
                        alert("Already Action Completed")
                    }
                }
                return emp;
            })
            setEmployees(updateEmployees)
        }

    // ==========================================
    //         status Change to Absent Logic
    // ==========================================

        function handleAbsent(id){
            const updateEmployees=employees.map((emp)=>{
                if(emp.id===id){
                    if(emp.status==="Not Marked" ||emp.status==="Absent" ){
                        return {...emp,status:"Absent"}
                    }
                    else{
                        alert("Already Action Completed")
                    }
                }
                return emp;
            })
            setEmployees(updateEmployees)
        }
    
    // ==========================================
    //      
    // ==========================================

    return(
        <>
            {employees.map((emp)=>(
                <div key={emp.id}>
                    <h3>{emp.id}</h3>
                    <p>{emp.name}</p>
                    <p>{emp.status}</p>
                    <button onClick={()=>{handlePresent(emp.id)}}>Present</button>
                    <button onClick={()=>{handleAbsent(emp.id)}}>Absent</button>
                </div>
            ))}
            {console.log("Data",data)}
        </>
    )
}
export default Task17