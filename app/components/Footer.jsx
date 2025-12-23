import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <main className=' bg-orange-200/30 '>

    <div className='lg:py-4 p-3 lg:px-8 flex items-center max-lg:justify-center justify-between max-lg:flex-col max-lg:gap-4'>

      <Link href={"/"} className='flex items-center gap-1 z-40'>
      
      <Image
      src={"/icon.png"}
      alt="logo"
      width={"800"}
      height={"800"}
      className="w-10 h-10"/>

      <p className="text-lg  max-md:hidden font-bold bg-gradient-to-r from-red-200 via-orange-600
       to-green-500 bg-clip-text text-transparent">PeoFile</p>
      </Link>
           
      <div className='flex items-center justify-center gap-5'>
        <Link href={"/aboutus"} className='text-gray-800 hover:text-green-500 transition-all duration-150'>About us</Link>
        <Link href={"/contact"} className='text-gray-800 hover:text-green-500 transition-all duration-150'>Contact us</Link>
        <Link href={"/faq"} className='text-gray-800 hover:text-green-500 transition-all duration-150'>FAQ</Link>
      </div>

      <div className="flex items-center gap-5 text-xl">
        <Link href={"#"}>
          <FaXTwitter className='cursor-pointer hover:text-green-500'/>
        </Link>
         <Link href={"#"}>
          <FaInstagram className='cursor-pointer hover:text-green-500'/>
        </Link>
         <Link href={"#"}>
          <CiLinkedin className='cursor-pointer hover:text-green-500'/>
        </Link>
      </div>

    </div>


        <div className="text-center text-gray-600 dark:text-gray-400 text-sm pb-5">
            <p className="">&copy; 2025 PeoFile. All rights reserved</p>
        </div>

    </main>
  )
}

export default Footer
