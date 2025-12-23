"use server"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import Network from './network';



const page = async () => {
    const session = await auth()
         if(!session) {
           redirect("auth/signin")
         }

  return (
    <main>
      <Network session={session}/>
    </main>
  )
}

export default page
