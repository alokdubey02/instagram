import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Feed from '@/components/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
       <div className='bg-gray-50 min-h-screen'>
          <Head>
          <title>Instagram App</title>
          <meta name="description" content="Instagram"/>
          <link rel="icon" href="/favicon.ico"/>
          </Head>

          {/* {Header} */}

          <Header/>

          {/* {Feed} */}

          <Feed/>

          {/* {Modal} */}
          

       </div>
  )
}
