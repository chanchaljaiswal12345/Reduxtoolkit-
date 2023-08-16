'use client'

import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { fetchUsers } from "./slices/userSlice"
import { AppDispatch, RootState } from './store/store';

export default function Home() {
  
  const userRef = useRef(false); 
  const { entities } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();



  useEffect(() => {
    if(userRef.current === false) {
      dispatch(fetchUsers())
    }
   return () => {
    userRef.current = true
   }

  },[])

  return (
    <div className='table-2'>


<div>
        <table className="border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border border-slate-500 px-4 py-2">NAME</th>
              <th className="border border-slate-500 px-4 py-2">EMAIL</th>
              <th className="border border-slate-500 px-4 py-2">USERNAME</th>
            </tr>
          </thead>
          <tbody>
            {entities?.map((user: any) => (
              <tr key={user.id}>
                <td className="border border-slate-500 px-4 py-2">{user.name}</td>
                <td className="border border-slate-500 px-4 py-2">{user.email}</td>
                <td className="border border-slate-500 px-4 py-2">{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


  
 </div>
  )
}
