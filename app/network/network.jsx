"use client"
import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { collection, getDocs, query, } from "firebase/firestore";
import { db } from "../config/firebaseConfig"; // Adjust path as needed

const Network = ({ session }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching all the users except the current user
  const fetchUsers = async () => {
    try {
      const usersCollection = collection(db, "users");
      //brings all users expect the current user
      const usersQuery = query(usersCollection,("userId", "!=", session?.user?.id));
      
      const querySnapshot = await getDocs(usersQuery);
      const usersArray = [];
      
      querySnapshot.forEach((doc) => {
        usersArray.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setUsers(usersArray);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchUsers();
     }}, [session]);

  return (
    <main className='min-h-dvh p-10 bg-gradient-to-br from-red-50 via-orange-50 to-green-50'>
      <div className='flex gap-8 flex-col lg:flex-row'>
        <div className='border border-gray-200 bg-white shadow-sm p-5 h-fit rounded-xl lg:w-80'>
          <h2 className='text-center font-semibold text-lg mb-4'>Manage my network</h2>
          <hr className='border-gray-200 mb-4' />
          <div className="flex justify-between font-medium text-gray-600 py-2 items-center">
            <div className='flex items-center gap-2'>
              <FaUserGroup className="text-gray-500" />
              <p>Connections</p>
            </div>
            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-medium">0</span>
          </div>
        </div>

        <div className='border border-gray-300 bg-white shadow-xs rounded-xl flex-1'>
          <h2 className='text-center text-gray-700 p-4 text-2xl font-semibold'>People On PeoFile</h2>
          <hr className='border-gray-200'/>
          
          {users.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No other users found</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
              {users.map((user) => (
                <div key={user.id} className='border border-gray-200 bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition-shadow'>
                  <div className='flex flex-col items-center text-center'>
                    <img src={user.image} alt={user.name} 
                      className="h-20 w-20 rounded-full border-4 border-white shadow-md mb-3 object-cover"/>  
                    <h3 className="font-semibold text-gray-800 mb-1">{user.name}</h3>
                    <button className='border border-orange-400 hover:bg-orange-50 rounded-full px-4 py-2 transition-colors cursor-pointer'>
                      <span className='flex items-center gap-2 text-orange-500 hover:text-orange-600'>
                        <FaUser/> Connect
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Network;