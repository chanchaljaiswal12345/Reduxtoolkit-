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
   return () => {https://github.com/chanchaljaiswal12345/Reduxtoolkit-/pull/1/commits/8e19b95bb8b075577a8cc2acf86fe7d43473ddb9
    userRef.current = true
   }

  },[])

  return (

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

  )
}
