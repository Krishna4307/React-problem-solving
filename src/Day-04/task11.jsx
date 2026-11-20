import { useState } from "react";

const productsArr = ["Laptop","Mobile","Keyboard","Mouse","Monitor","Tablet"];
function Task11(){
    const[products,setproducts]=useState(productsArr);
    const[searchInput,setSearchInput]=useState("");
    const filterSearchedProducts=products.filter((product)=>{
        return product.trim().toLowerCase().includes(searchInput.trim().toLowerCase())
    })
    console.log(filterSearchedProducts)
    return(
        <>
            <input type="text" placeholder="search here" onChange={(e)=>setSearchInput(e.target.value)}/>
            {searchInput ? 
            filterSearchedProducts.length>0 ? 
            filterSearchedProducts.map((pr)=><p>{pr}</p>):<p>No Students Found</p> 
            : products.map((product)=><p>{product}</p>) }
        </>
    )
}
export default Task11;