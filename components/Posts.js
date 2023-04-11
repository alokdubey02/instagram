import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id:"1",
            username:"Kumar",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?nature,girl",
            caption: "Thanks for "
        } ,
         {
            id:"2",
            username:"Alok",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?girl,fitness",
            caption: "Nice picture "
        },  {
            id:"3",
            username:"Dubey",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?girl,water",
            caption: "Thanks for "
        },
         {
            id:"4",
            username:"Sintu",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?girl,hot",
            caption: "Nice picture "
        },  {
            id:"5",
            username:"Shukla",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?girl,swim",
            caption: "Thanks for "
        },
         {
            id:"6",
            username:"Singh",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?girl,bike",
            caption: "Nice picture "
        },  {
            id:"7",
            username:"Aditya",
            userImg:"alok_image.jpg",
            img:"https://source.unsplash.com/900x900/?girl,beach",
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
