"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { redirect } from 'next/navigation'

const page = () => {
  
  const [login, setLogin] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

// Handle change
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle submit
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords must match!');
    setLoading(false);
    return;
  }
  setLoading(false);
};

  return (
    <main className='min-h-dvh bg-gradient-to-br from-orange-50 to-amber-50 flex flex-col items-center justify-center'>
       <div className='flex items-center justify-center '>
        <Image
              src={"/icon.png"}
              alt="logo"
              width={"800"}
              height={"800"}
              className="w-5 h-5"/>
        <h1 className="text-lg text-gray-800 text-2xl font-bold bg-gradient-to-r
         from-red-200 via-orange-600 to-green-500 bg-clip-text text-transparent">PeoFile</h1>
       </div>
         
         <div className="shadow-md p-3 rounded-md space-y-5 md:w-sm w-full">
            <div>
              {login? (
                redirect("/auth/signin")
              ):(
                
 <form onSubmit={handleSubmit}>

  <div className='text-center space-y-2'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-700'>Sign Up</h2>
        </div>
         
        <div>
           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
             Your name
          </label>
          <input  id="name" type="text"  name="name" placeholder="Peolite Leo" value={formData.name}
           onChange={handleChange} required className="w-full px-2 py-1 md:py-3 rounded-lg border
            border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-orange-400 
            focus:border-transparent transition-colors outline-none dark:text-"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
           Your email
          </label>
          <input type="email" name="email" placeholder='peolite@email.com' className="w-full 
          px-2 py-1 md:py-3 rounded-lg border border-gray-200 bg-white text-gray-900 
          dark:text- focus:ring-2 ring-orange-400 focus:border-transparent transition-colors
          outline-none"/>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
           Password
          </label>
          <input type="password" name="password" className="w-full px-2 py-1 md:py-3 rounded-lg
           border border-gray-200 bg-white text-gray-900 dark:text- focus:ring-2 ring-orange-400
            focus:border-transparent transition-colors outline-none"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
           Confirm Password
          </label>
          <input type="password" name="password" className="w-full px-2 py-1 md:py-3 rounded-lg
           border border-gray-200 bg-white text-gray-900 dark:text- focus:ring-2 ring-orange-400 
           focus:border-transparent transition-colors outline-none"/>
        </div>


         <label className="flex gap-1 text-gray-700 cursor-pointer">
           <input type="checkbox" name="terms" required />
            <span>I accept the Terms and Conditions</span>
         </label>


        <span className='flex items-center justify-center'>
        <button type='submit' disabled={loading} className='rounded-xl w-full bg-orange-500 hover:bg-orange-600
           py-2 text-center tracking-widest text-white'> {loading ? 'Creating...' : 'CREATE'}</button>
        </span>

        <p className='text-gray-700'>Already have an account?<Link href={"/auth/signin"}><span className='text-orange-500
         hover:underline'>Login here</span>
        </Link>
         </p>
 </form>
              )}
 


      </div>
      </div>
    </main>
  )
}

export default page
