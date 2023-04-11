import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id:"1",
            username:"Kumar",
            userImg:"alok_image.jpg",
            img:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            caption: "Thanks for "
        } ,
         {
            id:"2",
            username:"Alok",
            userImg:"alok_image.jpg",
            img:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            caption: "Nice picture "
        },  {
            id:"3",
            username:"Dubey",
            userImg:"alok_image.jpg",
            img:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            caption: "Thanks for "
        }
    ]
  return (
    <div>
        
        {posts.map(post=>(
            <Post 
                key={post.id} id={post.id} username={post.username}
                userImg={post.userImg} img={post.img} caption={post.caption}
            />
        ))}

    </div>
  )
}
