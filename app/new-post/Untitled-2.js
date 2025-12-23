"use client"
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig';


const NewPostForm = ({session}) => {
  const iv = {
    post: "",
  }
  const formValidation = Yup.object({
    post:Yup.string().required('write a post')
  })
  const handleSubmit = async (value)=>{
    try {
      const postDetails = {
        author: session.user.name,
        img: session.user.image,
        timestamp: new Date().toLocaleDateString(),
        ...value
      }
      console.log(postDetails);
      const docRef = await addDoc(collection(db, "peos"), postDetails)
      console.log("Document written with ID", docRef.id);
      alert('Post successful')
    } catch (error) {
      console.error("Error adding document", error)
      alert('An error occured, Try again later!!')
    }
  }

  return (
    <main className='min-h-dvh flex items-center justify-center'>
      <div className='lg:w-3xl p-3 shadow-lg shadow-orange-100 rounded-md'>
        <h1 className='lg:text-3xl md:text-2xl text-xl text-gray-800 text-center'>Share Your post</h1>
        <Formik initialValues={iv} validationSchema={formValidation} onSubmit={handleSubmit}>
          <Form className='space-y-5'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-sm text-gray-800'>Start a Post</label>
             <Field as='textarea'placeholder="What do you want to talk about" name="post" className="outline-none border rounded-md border-gray-200 p-2"></Field>
             <ErrorMessage name='post'  component={'p'} className='text-xs text-red-500'/>
            </div>
            <button type='submit' className='bg-orange-400 hover:bg-orange-500 text-white w-full rounded-md p-2
             transition-all duration-200'>Post</button>
          </Form>
        </Formik>
      </div>
    </main>
  )
}

export default NewPostForm
