"use server"
import { auth } from '@/auth'
import React from 'react'
import Notification from './Notification'
import { redirect } from 'next/navigation'
const page = async () => {
    const session = await auth()
    if(!session) {
       redirect("auth/signin")
     }

  return (
   <main className="min-h-dvh">
     <Notification session={session}/>
    </main>
  )
}

export default page
