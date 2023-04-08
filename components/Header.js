import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        
        {/* {left} */}

        <div className='flex items-center justify-between max-w-6xl' >
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
            <h1> Right side</h1>
        </div>

        {/* {Middle} */}



        {/* {Right} */}



    </div>
  )
}
