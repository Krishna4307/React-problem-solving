// ============================================
//             Task Requirements
// ============================================

// Requirements:
// - Display all products and their stock quantities.
// - Add a button to increase stock.
// - Add a button to decrease stock.
// - Stock must never become negative.
// - Display "Out of Stock" when stock is zero.
// - Display "Low Stock" when stock is between 1 and 3.
// - Display "Available" when stock is above 3.


import { useState } from "react";
const initialProducts = [
  { id: 1, name: "Laptop", stock: 10 },
  { id: 2, name: "Mobile", stock: 5 },
  { id: 3, name: "Keyboard", stock: 0 },
  { id: 4, name: "Mouse", stock: 3 }
];
function Task14(){
    const[products,setProducts]=useState(initialProducts);

    // ==========================================
    //         Increasing Stock Count
    // ==========================================

    function handleIncreaseStock(id){
        const updateStocks=products.map((product)=>{
            if(product.id===id){
                return{...product,
                    stock:product.stock+1
                }
            }
            return product;
        })
        setProducts(updateStocks)
    }

    // ==========================================
    //         Decreasing Stock Count
    // ==========================================

    function handleDecreaseStock(id){
        const updateStocks=products.map((product)=>{
            if(product.id===id){
                if(product.stock>0){
                    return {...product,
                        stock:product.stock-1
                    }
                }
            }
            return product;
        })
        setProducts(updateStocks)
    }

    // ==========================================
    //         Displaying All Products
    // ==========================================
    return(
        <>
            {products.map((product)=>(
                <div key={product.id}>
                    <p>{product.id}</p>
                    <h4>Product name : {product.name}</h4>
                    <p>Stock :{product.stock}</p>
                    <p>status : <strong>{product.stock<1?"No Stock Availble":product.stock>3?"Availble":"Low Stock"}</strong></p>
                    <button onClick={()=>{handleIncreaseStock(product.id)}}>Increase Stock</button>
                    <button onClick={()=>{handleDecreaseStock(product.id)}}>DecreaseStock</button><hr></hr>
                </div>
            ))}
        </>
    )
}
export default Task14;