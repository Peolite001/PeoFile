"use server"
import { auth } from '@/auth'
import React from 'react'
import Help from './help'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await auth()
      if(!session) {
        redirect("auth/signin")
      }
  return (
    <main className='min-h-dvh'>
      <Help session={session}/>
    </main>
  )
}

export default page
