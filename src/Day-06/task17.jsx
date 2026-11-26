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