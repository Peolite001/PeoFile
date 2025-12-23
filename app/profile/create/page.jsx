"use server"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import CreateProfile from './CreateProfile';



const page = async () => {
    const session = await auth()
         if(!session) {
           redirect("auth/signin")
         }

  return (
    <main>
      <CreateProfile session={session}/>
    </main>
  )
}

export default page
