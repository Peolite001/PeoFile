import { auth } from '@/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const session = await auth()
  if(!session) {
    redirect("/auth/signin")
  }
  
  return (
    <main className='min-h-dvh bg-orange-200/20 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-gradient-to-br from-orange-100 to-orange-200 py-8 sm:py-12 lg:py-16 
        text-center rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-12 shadow-xl'>
          
          <div className='mb-6 sm:mb-8'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-3 sm:mb-4'>
              Welcome back, dear{' '}
              <span className='underline underline-offset-4 decoration-2 text-gray-800 font-semibold
                sm:inline mt-2 sm:mt-0'>
                {session?.user?.name}
              </span>
            </h2>
            <div className='text-3xl'>
                {session?.user?.skills}
            </div>
          </div>
             
             
          <div className='max-w-2xl mx-auto mb-6 sm:mb-8'>
            About Me
            <p className='text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-orange-900/90'>
              {session?.user?.aboutMe}
            </p>
            <p></p>
          </div>

          <div className='mb-6 sm:mb-8'>
            <p className='text-orange-800 font-semibold text-base sm:text-lg underline underline-offset-2 decoration-1'>
              {session?.user?.email}
            </p>
          </div>

          <div className='flex justify-center'>
            <div className='relative'>
              <img 
                src={session?.user?.image} 
                alt={session?.user?.name}
                className='w-48 h-32 sm:w-56 sm:h-36 lg:w-64 lg:h-40 rounded-xl border-4 border-white shadow-2xl 
                object-cover transition-transform hover:scale-105 duration-300'/>
              <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white
               px-3 py-1 rounded-full text-xs font-medium shadow-lg'>
                Verified
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12 max-w-md mx-auto'>
            <div className='bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-md'>
              <p className='text-orange-800 font-semibold text-sm'>Member Since</p>
              <p className='text-orange-900 text-xs'>Recently</p>
            </div>
            <div className='bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-md'>
              <p className='text-orange-800 font-semibold text-sm'>Status</p>
              <p className='text-orange-900 text-xs'>Active</p>
            </div>
          </div>

          <div className='mt-8 sm:mt-10'>
            <Link href={"/home"}>
            <button className='bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8
             rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Continue to Dashboard
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page