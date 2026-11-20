function Cart({cartItems,setCartItems}){

    function handleRemoveItem(id){
        const removeItems=cartItems.filter((item)=>{
            // console.log("cartid:",typeof(id))
            // console.log("item id:",typeof(item.id))
            return item.id!==id;
        })
        setCartItems(removeItems)
    }

    
    return(
        <>
            <h3>Cart Items</h3>
            {cartItems.length===0?<p>No Items Added to Cart</p>:cartItems.map((item)=>(
                <div key={item.id}>
                    <p>{item.name} - {item.price}</p>
                    <button onClick={()=>{handleRemoveItem(item.id)}}>Remove form Cart</button>
                </div>
            ))}<hr></hr>
            {cartItems.length>0 && <p><strong>Total Cart Price </strong>: {cartItems.reduce((acc,item)=>{
                return acc+=item.price;
            },0)}</p> }
        </>
    )
}
export default Cart;