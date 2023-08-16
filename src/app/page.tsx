"use client";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./slices/userSlice";
import { AppDispatch, RootState } from "./store/store";

export default function Home() {
  const userRef = useRef(false);
  const { entities } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsers());
    }
    return () => {
      userRef.current = true;
    };
  }, []);

  return (
    <section className="py-1">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div>
          {" "}
          <p className="mb-2 text-3xl">User List</p>
        </div>

        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="block w-full overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-3 text-white align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    NAME
                  </th>
                  <th className="px-6 py-3 text-white align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    EMAIL
                  </th>
                  <th className="px-6 py-3 text-white align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    USERNAME
                  </th>
                </tr>
              </thead>

              <tbody>
                {entities?.map((user: any, index: number) => (
                  <tr key={user.id} className={"bg-gray-100"}>
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
