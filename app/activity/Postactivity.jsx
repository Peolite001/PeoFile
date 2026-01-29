"use client"
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { collection, getDocs, doc, deleteDoc, where, } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbLoader3 } from "react-icons/tb";


const PostActivity = ({session}) => {
  
  const userName = session.user.name;

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    // feches post with users skill together
    const fetchPostsWithSkill = async () => {
       try{
      const postArray = [];
      const querySnapshot = await getDocs(collection(db, "peos"), where("author", "==", userName));
  
        // fetching userskill and creating a usermap to map the author to ther skill
       const usersSnapshot = await getDocs(collection(db, "users"));
       const usersMap = {};
       usersSnapshot.forEach((userDoc) => {
      const userData = userDoc.data();
      usersMap[userData.name] = userData.skills;
        });
     
        // processing the post and skill from the usermap
      querySnapshot.forEach((doc) => {
          const postData = doc.data();
          const authorName = postData.author;
        console.log(doc.id, " => ", postData);
  
        const postObject = {
          id: doc.id,
          ...postData,
          skills: usersMap[authorName]
        };
          
        postArray.push(postObject);
      });
    
      setPosts(postArray);
     } catch(error){
        console.error('Loading post failed', error); 
        setError('Failed to load activity. Please try refreshing.');
      }finally {
        setLoading(false);
      }
    };
  
  
    useEffect(() => {
      fetchPostsWithSkill();
    }, []);
   
    const [likes, setLikes] = useState({});
  
    // getting posts, spreading them then getting taking each post based on ther id
    const handleLike = (postId) => {
    setLikes((before) => ({
      ...before,
      [postId]: !before[postId]
    }));
  };
  
   const handleDelete = async (id) => {
      if(window.confirm("If you delete this post yu cant get it back!!")){
        await deleteDoc(doc(db, "peos", id));
      }
    };

  return (
   <main className="min-h-dvh bg-gradient-to-br from-red-50 via-orange-50 to-green-50">
         <div className="flex flex-col lg:flex-row justify-center p-4 lg:p-5 gap-6 lg:gap-10">
           {/* sidebar profile */}
           <div className="w-full lg:w-auto max-lg:hidden">
             <div className="border border-gray-200 bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-4 lg:mb-6">
               <div className="flex flex-col items-center text-center">
                 <div>
                   <img src={session?.user?.image} alt="img" className="h-16 w-16 lg:h-20 lg:w-20 rounded-full border-4 border-white shadow-md mb-3" />
                   <h2 className="font-semibold text-base lg:text-lg text-gray-800">{session.user.name}</h2>
                   <p>{session?.user?.skills}</p>
                 </div>
               </div>
               <div className="flex justify-between items-center mt-5">
                 <h3 className="font-semibold text-gray-400 text-sm">Connections</h3>
                 <span className="bg-orange-100 text-orange-600 px-1 rounded-full text-xs lg:text-sm font-medium">0</span>
               </div>
             </div>
           </div>

            <div className='border border-gray-300 bg-white/50 shadow-xs rounded-xl flex-1'>
          <h2 className='text-center text-gray-700 p-4 text-2xl font-semibold'>Your Activities</h2>
          <hr className='border-gray-200'/>
           <div className="w-full lg:w-180 mt-5 flex-1 lg:mx-auto">
                    <div className="text-center p-10 text-gray-200">No Activity</div>
                   </div>
                   </div>
          </div>
    
    </main>
  )
}

export default PostActivity
