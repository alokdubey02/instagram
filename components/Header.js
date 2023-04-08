import Image from 'next/image'
import React from 'react'
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
        
      <div className='flex items-center justify-between max-w-6xl' >
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

            <h1> Right side</h1>

        </div>

  )
}
