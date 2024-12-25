import React from 'react'
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-[550] sm:w-full bg-[#EFF1F2]  mt-5 mb-12 h-40 flex items-center justify-center">
    <div className="flex gap-6 items-center justify-center ">
    <h3 className="text-[#0A142F] font-sans  ">Contact</h3>
    <div className="bg-white p-2 rounded-full flex">
    <input type="email" placeholder=" Your email" className=" ml-4 font-sans bg-white rounded-lg w-80 sm:w-96 outline-none py-2 hover:outline-none" />
    <span><FaTelegram size={40} />
    </span>
    </div>
    </div>
  </div>
  )
}

export default Contact