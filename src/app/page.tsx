'use client'

import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { fetchUsers } from "./slices/userSlice"
import { AppDispatch, RootState } from './store/store';
import './page.css'
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
      <table className="main border-collapse border border-slate-500 ...">
   <thead className='table-head'>
     <tr>
       <th>NAME</th>
       <th >EMAIL</th>
       <th>USERNAME</th>
     </tr>
   </thead>
   {entities?.map((user: any) => (
   <tbody key={user.id} >
     <tr className='table-row'>
       <td>{user.name}</td>
       <td>{user.email}</td>
      <td>{user.username}</td>
     </tr>
  </tbody>
     ))}
 </table> 
 </div>
  )
}
