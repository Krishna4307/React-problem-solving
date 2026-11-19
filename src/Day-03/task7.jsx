// ============================================
//             Task Requirements
// ============================================
// React Task 7: Like and Dislike Button

// Build a simple post interaction component.

// Requirements:
// - Display a post with a Like button.
// - Clicking Like increases the like count.
// - Clicking again removes the like.
// - Display the total number of likes.
// - A user should not be able to like the same post repeatedly.



import { useState } from "react";
const postsArr=[
    {id:1,name:"journey",likes:0,likedStatus:false},
    {id:2,name:"Mobile",likes:0,likedStatus:false},
    {id:3,name:"Books",likes:0,likedStatus:false},
    {id:4,name:"Study",likes:0,likedStatus:false},
    {id:5,name:"Food",likes:0,likedStatus:false},
    {id:6,name:"Travelling",likes:0,likedStatus:false},
];

function Task7(){
    let btnStyles={
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"45px",
        height:"1px",
    }
    const[posts,setPosts]=useState(postsArr)

    // ==========================================
    //     Handling Likes count and status
    // ==========================================
    function HandleLike(id){
        let updatedPosts=posts.map((post)=>{
            if(post.id === id){
                if(post.likedStatus===false){
                    return {...post,likedStatus:true,likes:1}
                }
                else{
                    return {...post,likedStatus:false,likes:0}
                }
                
            }
            return post;
        })
        setPosts(updatedPosts)
    }
    return(
        <>
            {posts.map((post)=>(
                <div key={post.id}>
                    <p>{post.name}</p>
                    <button onClick={()=>{HandleLike(post.id)}}>
                        <p style={btnStyles}>{post.likedStatus?"❤️":"Like"} <span>{post.likes!==0 && post.likes}</span></p> 
                    </button>
                </div>
            ))}
            <p><strong>Total Likes</strong> : {posts.reduce((acc,post)=>{
                        return acc+=post.likes
                },0)}</p>
        </>
    )
}
export default Task7;