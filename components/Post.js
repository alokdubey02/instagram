import React from 'react'
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon } from '@heroicons/react/outline'

export default function Post({img,userImg,caption,username,id}) {
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

        <div className='flex justify-between px-4 pt-4 pb-3'>
            <div className="flex space-x-4">
                <HeartIcon className='btn' />
                <ChatIcon className='btn'/>

            </div>
            <BookmarkIcon className="btn"/>
        </div>
    </div>
  )
}
