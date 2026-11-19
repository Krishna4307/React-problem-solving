// ============================================
//             Task Requirements
// ============================================
// React Task 3: Product Category Filter
// Requirements:-

// - Display all products initially.
// - Create category buttons: All, Electronics, Clothing and Footwear.
// - Clicking a category should display matching products.
// - Clicking All should display every product.
// - Highlight the currently selected category.

import {useState } from "react";
function Task9(){
    const productsArr = [
        { id: 1, name: "Laptop", category: "Electronics" },
        { id: 2, name: "Shirt", category: "Clothing" },
        { id: 3, name: "Mobile", category: "Electronics" },
        { id: 4, name: "Shoes", category: "Footwear" },
        { id: 5, name: "Jeans", category: "Clothing" }
    ];
    let SelectedStyle={
        backgroundColor:"black",
        color:"white"
    }
    const[products,setProducts]=useState(productsArr)
    const[selectedCategory,setSelectedCategory]=useState({
        all:false,
        electronics:false,
        clothing:false,
        footwear:false
        })
    // const[all,setAll]=useState(false);
    // const[electronics,setElectronics]=useState(false)
    // const[clothing,setClothing]=useState(false);
    // const[footwear,setFootwear]=useState(false);
    function allProducts(){
        setSelectedCategory({
            all:true,
            electronics:false,
            clothing:false,
            footwear:false
        })
        setProducts(productsArr)
    }

    function electronicsProducts(){
        setSelectedCategory({
            all:false,
            electronics:true,
            clothing:false,
            footwear:false
        })
        let filterElectronicProducts=productsArr.filter((product)=>{
            return product.category==="Electronics"
        })
        console.log(filterElectronicProducts)
        setProducts(filterElectronicProducts)
    }

    function clothingProducts(){
        setSelectedCategory({
            all:false,
            electronics:false,
            clothing:true,
            footwear:false
        })
        let filterClothingProducts=productsArr.filter((product)=>{
            return product.category==="Clothing"
        })
        console.log(filterClothingProducts)
        setProducts(filterClothingProducts)
    }

    function footWearProducts(){
        setSelectedCategory({
            all:false,
            electronics:false,
            clothing:false,
            footwear:true
        })
        let filterFootwearProducts=productsArr.filter((product)=>{
            return product.category==="Footwear"
        })
        console.log(filterFootwearProducts)
        setProducts(filterFootwearProducts)
    }

    return(
        <>
            <button onClick={allProducts} style={selectedCategory.all===true?SelectedStyle:{}}>All</button>
            <button onClick={electronicsProducts} style={selectedCategory.electronics===true?SelectedStyle:{}}>Electronics</button>
            <button onClick={clothingProducts} style={selectedCategory.clothing===true?SelectedStyle:{}}>Clothing</button>
            <button onClick={footWearProducts} style={selectedCategory.footwear===true?SelectedStyle:{}}>Footwear</button>
            {products.map((product)=>(
                <div key={product.id} style={{border:"solid 1px gray",width:"450px",textAlign:"center"}}>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                </div>
            ))}
        </>
    )
}
export default Task9;