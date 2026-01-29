"use client";
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import { ImSpinner3 } from "react-icons/im";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
 border: '2px solid #D3D3D3',
  boxShadow: 24,
  p: 4,
};


const NewPostForm = ({session}) => {

   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    }

  const [processing, setProcessing] = useState(false);

  const iv = {
    post: "",
  }
  const formValidation = Yup.object({
    post:Yup.string().required('write a post')
  })
  const handleSubmit = async (value, {resetForm})=>{
    try {
      setProcessing(true)
      const postDetails = {
        author: session.user.name,
        img: session.user.image,
        timestamp: new Date().toLocaleDateString(),
        authorId: session.user.id,
        ...value
      }
      console.log(postDetails);
      const docRef = await addDoc(collection(db, "peos"), postDetails)
      console.log("Document written with ID", docRef.id);
       resetForm()
      handleOpen()
    } catch (error) {
      console.error("Error adding document", error)
    alert("Oops, an error occurred. Try again later!")
    } finally{
      setProcessing(false)
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
            
             <button type='submit' className='bg-orange-500 hover:bg-orange-600 text-white w-full 
             rounded-md p-3 transition-all duration-200 font-medium flex items-center justify-center'>
                {processing ? <ImSpinner3 className="animate-spin text-2xl"/> : 'Share Post'}
              </button>
          </Form>
        </Formik>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post Successfull !!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Go to <Link href={"/home"} className='text-green-500'>Home</Link> to view post
          </Typography>
        </Box>
      </Modal>

    </main>
  )
}

export default NewPostForm
