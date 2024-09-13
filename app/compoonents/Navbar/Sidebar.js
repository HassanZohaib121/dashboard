'use client'

import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expended, setExpended] = useState(true)

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expended ? 'w-32' : 'w-0'
            }`}
            alt=""
          /> */}
          <h1
            className={`overflow-hidden transition-all text-xl font-bold ${
              expended ? 'w-32' : 'w-0'
            }`}
          >
            Dashboard
          </h1>
          <button
            onClick={() => setExpended((curr) => !curr)}
            className=" p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expended ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expended }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 bottom-0">
          <img src="./people.png" alt="" className="w-10 h-10 rounded-md" />
          <div
            className={`overflow-hidden transition-all flex flex-row justify-between ${
              expended ? 'w-52 ml-3' : 'w-0'
            }`}
          >
            <div className=" leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, URL }) {
  const { expended } = useContext(SidebarContext)

  return (
    <Link href={`${URL}`}>
      <li
        className={`${
          text === 'Logout' && 'text-red-800 hover:bg-red-700 hover:text-white'
        } relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          text !== 'Logout' &&
          'hover:bg-gradient-to-tr hover:from-indigo-200 hover:to-indigo-100 hover:text-indigo-800'
        } ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        } `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expended ? 'w-52 ml-3' : 'w-0'
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expended ? '' : 'top-2'
            }`}
          ></div>
        )}
        {!expended && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 ${
              text !== 'Logout' && 'bg-indigo-100 text-indigo-800'
            } ${
              text === 'Logout' && ' bg-red-700 text-white'
            } text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  )
}
