"use client"
import React from 'react'
import { IoChatbubblesOutline } from "react-icons/io5";

const Message = () => {
  return (
    <main className='min-h-dvh bg-gradient-to-br from-red-50 via-orange-50 to-green-50'>

        <div className=''>
       <div className='flex flex-col items-center justify-center pt-50'>
        <IoChatbubblesOutline className='text-8xl text-orange-200'/>
        <p className='text-sm'>Connect with individuals on PeoFile to start chating</p>
       </div>
        </div>
      
    </main>
  )
}

export default Message
