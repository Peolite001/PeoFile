"use client"
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const page = () => {
  return (
    <main className='min-h-dvh bg-orange-200/10 '>

      <section>
        <div className='text-center pt-15 text-4xl'>
            <div className='text-2xl md:text-3xl font-bold uppercase mb-8 text-center'>
              <h2>Contact Us</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-10 md:p-30 mb-5 gap-25'>
              <div className='border border-gray-200 md:w-100 h-25 rounded-xl shadow-sm'>
                <div className='flex text-center gap-5 p-2 md:p-5 md:gap-10'>
                   <AiTwotoneMail className='text-5xl text-orange-400' />
                    <div>
                        <h2 className='text-2xl'>Create a support ticket</h2>
                        <p className='text-lg'>support@peofile.com</p>
                    </div>
                </div>
              </div>
              <div className='border border-gray-200 md:w-100 h-25 rounded-xl shadow-sm'>
                <div className='flex text-center gap-10 p-3 md:p-5 md:gap-10'>
                   <CiLocationOn className='text-5xl text-orange-400' />
                    <div>
                        <h2 className='text-2xl'>Location</h2>
                        <p className='text-lg'>Abuja, Nigeria</p>
                    </div>
                </div>
              </div>
              <div className='border border-gray-200 md:w-100 h-25 rounded-xl shadow-sm'>
                <div className='flex text-center gap-5 p-3 md:p-5 md:gap-10'>
                   <FaXTwitter className='text-5xl text-orange-400 cursor-pointer' />
                   <CiLinkedin className='text-5xl text-orange-400 cursor-pointer' />
                    <div>
                        <h2 className='text-2xl'>Follow Us</h2>
                        <p className='text-lg'>For more Info</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className=" py-20 px-5 flex justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-white/5 border border-gray-700 focus:border-orange-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-white/5 border border-gray-700 focus:border-orange-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded-lg bg-white/5 border border-gray-700 focus:border-orange-500 outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-lg bg-orange-600 hover:bg-orange-700 transition-all duration-200 text-lg font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default page
