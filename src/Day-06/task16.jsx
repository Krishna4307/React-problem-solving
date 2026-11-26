// ============================================
//             Task Requirements
// ============================================
// Requirements:-

// 1. Display all products.
// 2. Add a product to the wishlist.
// 3. If a product is already in the wishlist, don't add it again.
// 4. Remove a product from the wishlist.
// 5. Display the total number of wishlist items.
// 6. Display a message when the wishlist is empty.
// 7. Add a button to move a wishlist item to a cart.
// 8. Prevent adding the same product to the cart more than once.
// Expected behavior:
// - Initially: 4 products, 0 wishlist items, 0 cart items.
// - Add Laptop: wishlist count becomes 1.
// - Add Laptop again: wishlist count remains 1.
// - Add Mobile: wishlist count becomes 2.
// - Remove Laptop: wishlist count becomes 1.
// - Move Mobile to cart: wishlist count becomes 0, cart count becomes 1.


import { useState } from "react";
const productsArr = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 2000 }
];
function Task16(){
    const[products,setProducts]=useState(productsArr);
    const[wishList,setWishList]=useState([]);
    const[cart,setCart]=useState([]);


    // ==========================================
    //         Add to Cart Logic
    // ==========================================
    function handleAddtoCart(id){
        const filterCartItems=products.find((product)=>{
            return product.id===id
        })
        console.log(filterCartItems)
        const alreadyAdded = cart.some((item) => item.id === id);   
        if(alreadyAdded){
            alert("Already Added");
            return;
        }
        setCart([...cart,filterCartItems])
    }


        // ==========================================
    //         Add to Cart Logic
    // ==========================================
    function handleAddtoWishlist(id){
        const filterwishlistItem=products.find((product)=>{
            return product.id===id
        })
        const alreadyAdded = wishList.some((item) => item.id === id);   
        if(alreadyAdded){
            alert("Already Added");
            return;
        }
        setWishList([...wishList,filterwishlistItem])
    }

    
    // ==========================================
    //         Remove from Cart Logic
    // ==========================================
    function handleRemoveCartItem(id){
        const updateCartItems=cart.filter((product)=>{
            return product.id!==id
        })
        setCart(updateCartItems)
    }

    // ==========================================
    //         Remove from Wishlist Logic
    // ==========================================
    function handleRemoveWishlistItem(id){
        const updateWishlistItems=wishList.filter((product)=>{
            return product.id!==id
        })
        setWishList(updateWishlistItems)
    }

    // ==========================================
    //         Move to cart Logic
    // ==========================================
    function handleMovetoCart(id){
        const movingProduct=wishList.find((item)=>{
            return item.id===id
        })
        setCart([...cart,movingProduct])
        if(wishList.length>0){
            const updateWishlistItems=wishList.filter((item)=>{
                return item.id!==id
            })
            setWishList(updateWishlistItems)
        }

    }

    return(
        <>
            {products.map((product)=>(
                <div key={product.id}>
                    <h3>{product.id}</h3>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={()=>{handleAddtoWishlist(product.id)}}>Add to WishList</button><hr></hr>
                </div>
            ))}

            <p>Total no.of WishList Items :<strong>{wishList.length}</strong></p>
            <h1 style={{color:"red"}}>WishListItems</h1>
            {wishList.length>0? wishList.map((product)=>(
                <div key={product.id}>
                    <h3>{product.id}</h3>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={()=>{handleRemoveWishlistItem(product.id)}}>Remove from Wishlist</button>
                    <button onClick={()=>{handleMovetoCart(product.id)}}>Move to Cart</button>
                    <hr></hr>
                </div>
            )):<h3>No Items Added to WishList</h3>}<hr></hr>


            <p>Total no.of Cart Items :<strong>{cart.length}</strong></p>
            <h1 style={{color:"orange"}}>Cart Items</h1>
            {cart.length>0?cart.map((product)=>(
                <div key={product.id}>
                    <h3>{product.id}</h3>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={()=>{handleRemoveCartItem(product.id)}}>Remove from Cart</button><hr></hr>
                </div>
            )):<h3>No Items Added to Cart</h3>}
        </>
    )
}
export default Task16;