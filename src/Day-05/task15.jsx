// ============================================
//             Task Requirements
// ============================================
// Requirements:
// - Display all booking requests.
// - Add an Accept button.
// - Add a Reject button.
// - Once accepted, status should become "Accepted".
// - Once rejected, status should become "Rejected".
// - Prevent processing the same booking more than once.
// - Display the total number of pending bookings.

import { useState } from "react";
const IntalizeBookings = [
  { id: 1, name: "Rahul", room: "101", status: "Pending" },
  { id: 2, name: "Priya", room: "102", status: "Pending" },
  { id: 3, name: "Arjun", room: "103", status: "Pending" }
];
function Task15(){
    const[bookings,setBookings]=useState(IntalizeBookings);

    function handleAccept(id){
        const updatedBookings=bookings.map((book)=>{
            if(book.id===id){
                if(book.status==="Pending"){
                    return {...book,status:"Rejected"}
                }
                else{
                    alert("Already Action Completed On this Booking")
                }
            }
            return book;
        })
        setBookings(updatedBookings)
    }

    function handleReject(id){
        const updatedBookings=bookings.map((book)=>{
            if(book.id===id){
                if(book.status==="Pending"){
                    return {...book,status:"Rejected"}
                }
                else{
                    alert("Already Action Completed On this Booking")
                }
            }
            return book;
        })
        setBookings(updatedBookings)
    }

    return(
        <>
            {bookings.map((booking)=>(
                <div key={booking.id}>
                    <h2>{booking.id}</h2>
                    <p>Person Name : {booking.name}</p>
                    <p>Room No : {booking.room}</p>
                    <p>Status : {booking.status}</p>
                    <button onClick={()=>{handleAccept(booking.id)}}>Accept</button>
                    <button onClick={()=>{handleReject(booking.id)}}>Reject</button>
                </div>
            ))}

            <h2>Total Bookings in Pending : {bookings.reduce((acc,book)=>{
                if(book.status==="Pending"){
                    acc+=1
                }
                return acc;
            },0)}</h2>
        </>
    )
}
export default Task15;