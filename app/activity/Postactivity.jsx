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
                     {/* loading when post is being fetched from database */}
                     {
                       loading ? <div className='h-64 flex items-center justify-center'>
                               <TbLoader3 className='text-4xl text-orange-500 animate-spin' />
                           </div> : 
                           // post being loaded from database
                           posts.map((post) => (
                       <div
                         key={post.id}
                         className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
                         <div className="p-4 border-b border-gray-100">
                           <div className="flex items-center gap-3">
                           <img src={post.img}  className="h-8 w-8 lg:h-10 lg:w-10 rounded-full border-2 border-gray-200"/>
                           <div>
                             <p className="font-semibold text-gray-800 text-sm lg:text-base">{post.author.slice(0,11)}</p>
                             <p className="text-xs lg:text-sm text-gray-600">{post.skills}</p>
                             <p className="text-xs lg:text-sm text-gray-500">{post.timestamp}</p>
                           </div>
                           </div>
                         </div>
           
                         {/* content of the post */}
                         <div className="p-4">
                           <div className="text-gray-700 text-sm lg:text-base">{post.post}</div>
                         </div>
                             
                         {/* interactions with the post */}
                         <div>
                           <div className="px-4 py-2 border-t border-gray-100">
                           <div className="flex justify-between text-xs lg:text-sm text-gray-500">
                             <span>{likes[post.id] ? 1 : 0} likes</span>
                             <span>0 comments</span>
                             </div>
           
                             <div className="border-t border-gray-200 mx-4 mt-2"></div>
                             <div className="flex items-center justify-between p-2 lg:p-3">
                               <div className="flex gap-4 lg:gap-8">
                                 {/* like button */}
                                 <button
                                   onClick={()=>handleLike(post.id)}
                                   className="py-1 px-3 lg:px-5 rounded-lg hover:bg-gray-200 transition-colors flex gap-1 cursor-pointer text-xs lg:text-sm"
                                 >
                                   {likes[post.id] ? (
                                     <span className="flex gap-1 text-orange-500" ><FaRegThumbsUp className="mt-0.5"/> Like </span>
                                   ) : (
                                     <span className="flex gap-1 font-medium text-gray-600" ><FaRegThumbsUp className="mt-0.5"/> Like </span>
                                   )}
                                 </button>
                               </div>
                                   {/* comment button */}
                               <div className="py-1 px-3 lg:px-5 rounded-lg hover:bg-gray-200 transition-colors flex gap-1 cursor-pointer text-xs lg:text-sm">
                                 <FaRegCommentDots className="mt-0.5 font-medium text-gray-600" />
                                 <p>Comment</p>
                               </div>
                                  {/* delete button */}
                               { post.author === session.user.name ? (
                                 <button
                                   className="py-1 px-3 lg:px-5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                                   onClick={() => handleDelete(post.id)}
                                 >
                                   <FaRegTrashCan className="text-red-500"/>
                                 </button>
                               ) : null}
                             </div>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                   </div>
          </div>
    
    </main>
  )
}

export default PostActivity
