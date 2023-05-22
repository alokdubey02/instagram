import React from 'react'
import {getProviders, signIn} from "next-auth/react"
import Header from "../../components/Header"

export default function signin({ providers}) {
  return (
    <>
        <Header/>
    <div className="flex justify-center space-x-7 mt-20">
          <img className='hidden object-cover rotate-6 md:inline-flex md:w-48' src="https://images.squarespace-cdn.com/content/v1/5b4cc5e68f5130170559c4bf/1596631057072-5DRYJ7FZDYT25WNNESWC/apple+device+iphone+instagram+messages+download" alt="instagram-image"/>
          <div className="">
                {Object.values(providers).map((provider) =>(
                  <div key={provider.name} className='flex flex-col items-center'>
                    <img className='w-32 object-cover' src='https://techstory.in/wp-content/uploads/2021/12/instagram-logo-2-2.png' alt=''/>
                    <p className='text-sm italic my-10 text-center'> This app is created for learning purpose By Alok Dubey</p>
                    <button onClick={()=> signIn(provider.id, {callbackUrl: "/"})} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 '>Sign in with {provider.name}</button>
                  </div>
                ))}
          </div>
    </div>
    </>
  )
}

export async function getServerSideProps(context ){
  const providers = await getProviders();
  return {
    props: { providers }
  }
}