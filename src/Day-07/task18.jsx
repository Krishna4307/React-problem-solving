// ============================================
//             Task Requirements
// ============================================
// ##Shopping Cart with Product Search and Category Filter

// Requirements:
// 1. Display all products.
// 2. Search products by name.
// 3. Filter products by category: All, Electronics, Fashion.
// 4. Add products to the cart.
// 5. Increase and decrease product quantities.
// 6. Remove products from the cart.
// 7. Display total cart quantity.
// 8. Calculate total cart price.
// 9. Display a message when no products match the search/filter.

import { useState } from "react";
function Task18(){
    const[products,setProducts]=useState([
        { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
        { id: 2, name: "Mobile", category: "Electronics", price: 20000 },
        { id: 3, name: "Shirt", category: "Fashion", price: 1500 },
        { id: 4, name: "Shoes", category: "Fashion", price: 2500 },
        { id: 5, name: "Headphones", category: "Electronics", price: 3000 }
    ])
    const[cart,setCart]=useState([]);
    const[searchInput,setSearchInput]=useState("");
    let filterSearchedItems=products.filter((product)=>{
        console.log(searchInput)
        return product.name.toLowerCase().includes(searchInput.toLowerCase()) || 
            product.category.includes(searchInput);
    })
    // console.log(filterSearchedItems)

    function handleAddtoCart(id){
        const cartItem=products.find((product)=>product.id===id)
        const alreadyExist=cart.find((item)=>item.id===cartItem.id)
        if(alreadyExist){
            alert("Already Added into Cart")
            return;
        }
        setCart([...cart,cartItem])
    }

    function handleRemoveCart(id){
        const filterCartItems=cart.filter((item)=>{
            return item.id!==id
        })
        setCart(filterCartItems)
    }
    return(
        <>
            <input type="text" value={searchInput} placeholder="Search here" 
                onChange={(e)=>{setSearchInput(e.target.value)}}/><br></br>

            <div style={{marginTop:"25px"}}>
                <button onClick={()=>{setSearchInput("")}}>All</button>&nbsp;
                <button onClick={()=>{setSearchInput("Electronics")}}>Electronics</button>&nbsp;
                <button onClick={()=>{setSearchInput("Fashion")}}>Fashion</button>
            </div>
            {filterSearchedItems.length===0?<h3>No Products Foun</h3>:filterSearchedItems.map((item)=>(
                <div key={item.id}>
                    <h3>{item.id}</h3>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={()=>{handleAddtoCart(item.id)}}>Add to Cart</button>
                </div>
            ))}<hr></hr>

            <h2>Cart Items</h2>
            <p>Total Cart Items : <strong>{cart.length}</strong></p>
            {cart.length>0 && <p>Total Cart Price : {cart.reduce((acc,item)=>acc+=item.price,0)}</p>}
            {cart.length===0?<h3>No items Added to Cart</h3>:cart.map((item)=>(
                <div key={item.id}>
                    <h3>{item.id}</h3>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={()=>{handleRemoveCart(item.id)}}>Remove from Cart</button>
                </div>
            ))}
        </>
    )
}
export default Task18