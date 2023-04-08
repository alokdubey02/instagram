import Image from 'next/image'
import React from 'react'
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
        
      <div className='flex items-center justify-between max-w-6xl mx-4  xl:mx-auto' >
        {/* {left} */}

            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image  src={"/instagram_logo.png"}
                layout="fill"
                className='object-contain'
                />

            </div>
            <div className='cursor-pointer h-24 w-12 relative lg:hidden'>
                <Image  src={"/instagram_logo_small.png"}
                layout="fill"
                className='object-contain'
                />

            </div>

        {/* {Middle} */}

            <div className='relative mt-1'>
                <div className='absolute top-2 left-2'>
                    <SearchIcon className='h-5 text-gray-500'/>
                </div>
                <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
            </div>

        {/* {Right} */} 

        <div className="flex space-x-4 items-center">
            <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
            <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
            <img src='alok_image.jpg' alt='user-image' className='h-10 rounded-full cursor-pointer'/>
        </div>

        </div>

  )
}
