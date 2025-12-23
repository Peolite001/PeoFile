"use server"
import React from 'react'
import Home from './home'
import { auth } from '@/auth'

const page = async () => {
  const session = await auth()
  if(!session) {
    redirect("auth/signin")
  }
  return (
    <main className='min-h-dvh'>
      <Home session={session}/>
    </main>
  )
}

export default page
