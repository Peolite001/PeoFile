"use client"
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const page = () => {

    const [barOpen , setBarOpen] = useState(false);
    
  return (
    <main className='min-h-dvh bg-orange-200/10'>
      <section>
        <div className='p-10'>
            <h2 className='text-3xl'>Peofile FAQ</h2>
            <p className='text-gray-300'>Last updated: 1 week ago</p>
        </div>
        <hr  className='text-gray-300'/>
      </section>

      <section>
        <div className='lg:flex'>
            <div className='p-10 space-y-8 text-sm'>
                <h2>The Peofile experience was designed so you can easily surface ideas, drive conversations, and discover topics you care about. When you sign into Peofile, you land on your homepage, which gives you access to your feed, connections, profile, messages, and notifications. Your Peofile Feed contains posts from your network, individuals you follow, and more.</h2>
                <div>
                    <p>Check out some of these frequently asked questions about the LinkedIn Homepage.</p>
                </div>

                <div>
                  <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">What features are within the top navigation bar and how do I access features I don't see in the navigation?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className=" bg-amber-200/30 text-sm items-center gap-10 p-5">
                         The Peofile.com navigation bar is a simple menu of tabs located at the top of the Peofile homepage that makes it easy to access various features quickly. The menu includes My Network, Messaging, Notifications and Me.
                         <ul className='space-y-5 p-5'>
                            <li>.My Network allows you to manage your connections, invitations, and groups,</li>
                            <li>.Messaging is where you can access your messages</li>
                            <li>.Notifications let you view updates about your connections.</li>
                            <li>.Me is where you can view and edit your profile, manage account settings, and access the Help Center.</li>
                         </ul>
                    </div>
        </AccordionDetails>
      </Accordion>
    </div>
                    {/* <span className='flex text-xl'>
                    <h1>What features are within the top navigation bar and how do I access features I don't see in the navigation?</h1>
                    <div className={`md:w-200 text-sm absolute top-0 md:left-10 flex flex-col items-center gap-10 p-5 md:mt-120 
                         ${barOpen ? "opacity-100" :"opacity-0"}`}>
                         The Peofile.com navigation bar is a simple menu of tabs located at the top of the Peofile homepage that makes it easy to access various features quickly. The menu includes My Network, Messaging, Notifications and Me.
                         <ul>
                            <li>.My Network allows you to manage your connections, invitations, and groups,</li>
                            <li>.Messaging is where you can access your messages</li>
                            <li>.Notifications let you view updates about your connections.</li>
                            <li>.Me is where you can view and edit your profile, manage account settings, and access the Help Center.</li>
                         </ul>
                    </div>
                             <button onClick={()=> setBarOpen(!barOpen)} 
                             className='text-xl ml-2 z-40'>
                               {
                                 barOpen ? <FaChevronDown  /> : <FaChevronUp />
                               }  
                             </button>
                    </span> */}
                </div>
            </div>
            <div className='max-md:hidden border h-110 border-gray-300 w-0 mr-100 '></div>
        </div>
      </section>
    </main>
  )
}

export default page
