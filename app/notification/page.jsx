import { auth } from '@/auth'
import React from 'react'

const page = async () => {
    const session = await auth()
    if(!session) {
       redirect("auth/signin")
     }

  return (
   <main className="min-h-dvh bg-gradient-to-br from-red-50 via-orange-50 to-green-50">
      <div className='text-center leading-100 tracking-widest text-5xl text-gray-800 font-medium'>
       COMMING SOON
        </div>
    </main>
  )
}

export default page
