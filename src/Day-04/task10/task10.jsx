// ============================================
//             Task Requirements
// ============================================

// Requirements:
// - Display all products with their prices.
// - Add an Add to Cart button.
// - Display selected products in the cart.
// - Allow users to remove products from the cart.
// - Calculate the total cart price.
// - Prevent adding the same product multiple times.


import { useState } from "react";
import Cart from "./cart";
const productsArr = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 }
];
function Task10(){
    const[products,setProducts]=useState(productsArr);
    const[cartItems,setCartItems]=useState([]);
    function handleAddtoCart(id){
        const cartItem=products.find((product)=>{
            return product.id===id;
        })
        setCartItems([...cartItems,cartItem])
    }
    return(
        <>
            {products.map((product)=>(
                <div key={product.id}>
                    <p>{product.name} - {product.price}</p>
                    <button onClick={()=>{handleAddtoCart(product.id)}}>Add to Cart</button>
                </div>
            ))}<hr></hr>
            
            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        </>
    )
}
export default Task10;