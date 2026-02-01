"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { signOut, useSession } from "next-auth/react"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();
  //use to get the current url path
  const pathname = usePathname();
  console.log(session);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

      const navItems = [
        {label: "Home",  url: "/home"},
        {label: "My Network", url: "/network"},
        {label: "Message", url: "/message"},
        {label: "Notifications", url: "/notification"}
    ]
  return (
    <div>
      <section className="py-5 bg-orange-200/30 shadow-sm">
        <nav className="flex justify-between">
            <div className="flex ml-10 h-10 w-20">
                <Image 
                src={"/icon.png"}
                alt="my pic"
                width={"800"}
                height={"800"}
                className="w-10 h-10"/>
                <Link href={"/"}>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-200 via-orange-600 
                   to-green-500 bg-clip-text text-transparent text-center">PeoFile</h1>
                </Link>
            </div>

             {/* Desktop view */}
      <div className='lg:flex items-center gap-6 hidden'>
       {
          navItems.map((item, index) => {
            //use to check if item url matches current path
            const isActive = pathname === item.url;
            return (
              <Link
                key={index}
                href={item.url}
                className={`text-gray-800 hover:text-green-500 transition-all duration-150 text-lg
                 ${isActive ? "bg-orange-400 rounded-lg px-2 text-white shadow-lg" : "text-gray-600 rounded-lg px-2 hover:text-gray-900 hover:bg-gray-100"}`}>
                  {item.label}
                </Link>
            );
          })
        }
      </div>

      {/* mobile and nav view */}
      <div className={`lg:hidden bg-amber-100/100 h-dvh w-full absolute top-0 
      left-0 flex flex-col items-center gap-10 pt-20 ${navOpen ? "opacity-100" :"opacity-0"}`}>
         {
          navItems.map((item, index)=>(
            <Link
            key={index}
             href={item.url}
              className='hover:text-green-500 transition-all duration-150 text-gray-500 text-lg'>
                {item.label}
                </Link>
          ))}
      </div>

        <div className='lg:mr-10'>
            {session ? (
              <div className='ml-30 md:ml-140 lg:ml-0'>
                <button
                id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
      >
        <img 
        src={session?.user?.image} 
        alt={session?.user?.name}
        className='w-10 h-10 rounded-full' />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}><Link href={"/profile"}>View Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/help"}>Help</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/activity"}>Posts&Activity</Link></MenuItem>
        <MenuItem onClick={handleClose}> <button onClick={()=> signOut()}>Sign Out</button></MenuItem>
      </Menu>
    </div>
            ) : (

            <div className="flex md:gap-5 text-sm">
                <div className="flex mt-2 md:gap-5">
                    <Link href={"#"}>
                </Link>
                <Link href={"/register"} className='flex gap-1 text-lg hover:text-green-500'>
                <FaRegUser className='mt-1' />
                <p className='max-md:hidden'>Sign up</p>
                </Link>
                <Link href={"/auth/signin"}>
                <p className="hover:text-green-500 lg:text-lg text-sm ">Log in</p>
                </Link>
                </div>
                </div>
            )}
        </div>
                <button onClick={()=> setNavOpen(!navOpen)} 
        className='lg:hidden text-2xl ml-2 z-40'>
          {
            navOpen ? <IoIosClose /> : <RiMenu3Line />
          }  
        </button>
        </nav>
    </section>
    </div>
  )
}

export default Navbar

