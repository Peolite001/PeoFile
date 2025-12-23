"use client"
import { db } from '@/app/config/firebaseConfig';
import React, { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { ImSpinner3 } from "react-icons/im";


const CreateProfile = ({session}) => {

    const uId = session?.user?.id
    
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
    aboutMe: "",
    skills: "",
    hobbys: "",
  })

  const handleUpdate = async(uId) =>{
    try{
      setProcessing(true)
      const userRef = doc(db, "users", uId);
     await updateDoc(userRef, {
        aboutMe:formData.aboutMe,
        skills: formData.skills,
        hobbys: formData.hobbys,
          });
          alert("Profile update sucessful")
    }  catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile. Please try again.");
        } finally{
      setProcessing(false)
    }
    }



  return (
    <main className='min-h-dvh'>
      <h2 className='text-center text-4xl lg:text-5xl font-medium text-gray-800 mt-10'>Create Your Profile</h2>
       <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* about me */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">About Me</h3>
        <textarea
          name='aboutMe'
          placeholder="Tell us more about yourself..."
          className="w-full h-32 p-3 border rounded-lg resize-none outline-orange-300"
          maxLength={500}
          value={formData.aboutMe} onChange={(e) => setFormData(data => ({...data, aboutMe: e.target.value}))}
        />
        <p className="text-sm text-gray-500 mt-2">Max 500 characters</p>
      </div>

     {/* your skill */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Skills & Expertise</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Skills</label>
            <input
              name='skills'
              type="text"
              placeholder="e.g., JavaScript, React, Node.js, UI/UX Design"
              className="w-full p-3 border rounded-lg outline-orange-300"
              value={formData.skills} onChange={(e) => setFormData(data => ({...data, skills: e.target.value}))}
            />
            <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
          </div>
        </div>
      </div>

      {/* hobbys */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Personal Interests</h3>
        <input
          name='hobbys'
          type="text"
          placeholder="e.g., Open Source, Mentoring, Photography, Hiking"
          className="w-full p-3 border rounded-lg outline-orange-300"
          value={formData.hobbys} onChange={(e) => setFormData(data => ({...data, hobbys: e.target.value}))}
        />
        <p className="text-sm text-gray-500 mt-2">What you like doing when not working</p>
      </div>

      <div className="flex gap-4 justify-end">
        <button type='submit' onClick={()=> handleUpdate(uId)} className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
          {processing ? <ImSpinner3 className="animate-spin text-2xl text-white justify-center" />  : "Publish Profile"}
        </button>
      </div>
    </div>
    </main>
  )
}

export default CreateProfile
