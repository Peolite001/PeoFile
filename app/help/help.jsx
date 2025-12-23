"use client"
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { signOut } from 'next-auth/react';

const Help = ({session}) => {
    const userId = session.user.id
    const handleDelete = async () => {
     if(window.confirm("Can't get it back when deleted!!")){
        try{
            await deleteDoc(doc(db, "accounts", userId));
            alert('Account deleted successfully! Redirecting to login...');
            //redirects you automatically
            await signOut({ callbackUrl: '/auth/signin' });
          } catch (error){
            console.error('Delete failed:', error); 
          }
      }
 };

  return (
    <main className='min-h-dvh bg-orange-200/20'>
      <section>

           <section className=' bg-orange-200/30  p-10 flex gap-x-50'>
                   <div className='flex gap-2'>
                      <div>
                        <Image src={"/icon.png"}
                         alt="logo"
                         width={"800"}
                         height={"800"}
                         className="w-10 h-10"/>
                      </div>
                      <h2 className='text-4xl bg-gradient-to-r from-red-200 via-orange-600
                       to-green-500 bg-clip-text text-transparent'>Help</h2>
                    </div> 
           </section>

        <div className=' bg-amber-200/30'>
            <h2 className=' p-10 text-3xl font-bold
          tracking-tight text-orange-800 sm:text-4xl'>Hi <span
          className=' text-gray-800 font-medium'>{`
          ${session?.user.name.slice(0,10)}`}, we're here to help</span>
          <div className='flex'>
            <Box sx={{ width: 700, maxWidth: '100%' }} className="mt-5 hover:outline-none">
      <TextField fullWidth label="How can we help?" id="fullWidth" className='bg-white'/>
    </Box>
    <button className='border border-gray-100 h-10 mt-7 rounded-md bg-gray-100 hover:bg-gray-200'>
      <CiSearch className='text-orange-800 '/>
    </button>
          </div>
     </h2>
        </div>

        <div className='p-10'>
        <h2 className='text-5xl mb-5 text-gray-800'>Peofile shortcuts</h2>
        <div className='space-y-8'>
        <div>
            <Link href={"/profile/create"} className='hover:underline text-orange-800 text-2xl'>Manage your account</Link>
        </div>
        <div>
            <Link href={"/profile/create"} className='hover:underline text-orange-800 text-2xl'>Change or add an email address</Link>
        </div>
        <button>
            <Link href={""} onClick={() => handleDelete()} className='hover:underline text-orange-800 text-2xl mb-2'>Close account</Link>
        </button>

        </div>
        </div>

      </section>
    </main>
  )
}

export default Help
