"use server"
import { auth } from '@/auth'
import React from 'react'
import Message from './Message'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await auth()
    if(!session) {
       redirect("/auth/signin")
     }

  return (
   <main className="min-h-dvh">
      <div className='text-center leading-100 tracking-widest text-5xl text-gray-800 font-medium'>
       <Message session={session}/>
        </div>
    </main>
  )
}

export default page
