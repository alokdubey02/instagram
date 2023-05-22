import React, { useState } from 'react'
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function Post({img,userImg,caption,username,id}) {
    const {data: session} = useSession();
    const [comment, setComment] = useState("")
    async function sendComment(event){
        event.preventDefault();
        const commentToSend = comment;
        setComment("");
        await addDoc(collection(db, "posts", id, "comments"),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    }
  return (
    <div className='bg-white my-7 border rounded-md'>
        {/* {post header} */}

        <div className="flex items-center ">

            <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username}/>
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        {/* {Post image} */}
        <img className='object-cover w-full' src={img} alt=''/>

        {/* {Post button} */}

        {session && (
            <div className='flex justify-between px-4 pt-4'>
                <div className="flex space-x-4">
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn'/>

                </div>
                <BookmarkIcon className="btn"/>
            </div>

        )}


        {/* {Post comments} */}

        <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

        {/* {Post input box} */}
        {session && (
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7'/>
                <input 
                 value={comment}
                 onChange={(event)=> setComment(event.target.value)}
                 className='border-none flex-1 focus:ring-0' type ="text" placeholder="Enter your comment..."/>
                <button type='submit' onClick={sendComment} disabled={!comment.trim()} className='text-blue-500 font-bold disabled:text-blue-200'>Post</button>
            </form>
        )}
    </div>
  )
}
