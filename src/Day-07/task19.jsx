// ============================================
//             Task Requirements
// ============================================
// ##Job Application Tracker

// Requirements:
// 1. Display all applications.
// 2. Add a new application using a form (company and role).
// 3. Change application status between Applied, Interview, Selected, Rejected.
// 4. Delete an application.
// 5. Filter applications by status.
// 6. Search applications by company name.
// 7. Display total applications.
// 8. Display counts for each status.
// 9. Prevent adding an application when company or role is empty.


import { useState } from "react";
function Task19(){
    const[applications,setApplications]=useState([
  { id: 1, company: "TCS", role: "Frontend Developer", status: "Applied" },
  { id: 2, company: "Infosys", role: "React Developer", status: "Interview" },
  { id: 3, company: "Wipro", role: "Frontend Developer", status: "Rejected" },
  { id: 4, company: "Accenture", role: "React Developer", status: "Applied" }
])
    const[searchInput,setSearchInput]=useState("");
    const[newApplication,setNewApplication]=useState(null);
    const[company,setCompany]=useState('');
    const[role,setRole]=useState('');

    // ============================================
    //       Filter Searching Applications
    // ============================================

    let filterApplications=applications.filter((application)=>{
        return application.company.toLowerCase().includes(searchInput.toLowerCase()) ||
                application.status.includes(searchInput) ||
                application.role.trim().toLowerCase().includes(searchInput.toLowerCase())
    })

    // ============================================
    //       Delete Particular Application
    // ============================================

    function handleDelete(id){
        const updateApplications=applications.filter((application)=>{
            return application.id!==id
        })
        setApplications(updateApplications)
    }

    // ============================================
    //       Adding new Applications
    // ============================================

    function handleSubmitApplication(e){
        e.preventDefault();
        // company=company[0].toUpperCase()
        let capitalizeRole = role
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ");


        setApplications([...applications,{
            id:applications.length+1,
            company:company[0].toUpperCase() + company.slice(1),
            role:capitalizeRole,
            status:"Applied"
        }])
        alert("Application Submitted Successfully!")
        setNewApplication(null)
        setCompany("")
        setRole("")
    }

    // ============================================
    //       Displaying All Applications
    // ============================================
    return(
        <>
            <input type="text" value={searchInput} placeholder="Search here" 
                onChange={(e)=>{setSearchInput(e.target.value)}}/><br></br>

            <div style={{marginTop:"25px"}}>
                <button onClick={()=>{setSearchInput("")}}>All</button>&nbsp;
                <button onClick={()=>{setSearchInput("Applied")}}>Applied</button>&nbsp;
                <button onClick={()=>{setSearchInput("Interview")}}>Interview</button>
                <button onClick={()=>{setSearchInput("Rejected")}}>Rejected</button>
                <button onClick={()=>{setSearchInput("Selected")}}>Selected</button>
            </div><hr></hr>
            <p style={{fontSize:"18px",letterSpacing:"1px"}}>Total Applications : <strong>{applications.length}</strong></p>
            {newApplication===null &&<button onClick={()=>{setNewApplication(!null)}}>Add New Application</button>}
            {newApplication!==null && 
                <form onSubmit={(e)=>{handleSubmitApplication(e)}}>
                    <input required type="text" value={company} placeholder="Enter Company Name" 
                        onChange={(e)=>{setCompany(e.target.value)}}/>
                    <input required type="text" value={role} placeholder="Enter Role" 
                        onChange={(e)=>{setRole(e.target.value)}}/>
                    <button type="submit">Submit</button>
                </form>}
            <hr></hr>
            {filterApplications.length===0?<h3>No Applications Found</h3>:filterApplications.map((application)=>(
                <div key={application.id}>
                    <h3>{application.id}</h3>
                    <p>{application.company}</p>
                    <p>{application.role}</p>
                    <p>{application.status}</p>
                    <button onClick={()=>{handleDelete(application.id)}}>Delete</button>
                </div>
            ))}<hr></hr>
            {console.log(applications)}
        </>
    )
}
export default Task19