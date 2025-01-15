import React from "react";
import avatar from '../assets/avatar.png'
import { BiCalendar } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoIosAlert } from "react-icons/io";
import 'chart.js/auto';

import { Doughnut } from 'react-chartjs-2';
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";





interface ChartData {
  // labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}


const Sidebar: React.FC = () => {
  
  const theme = useSelector((state : RootState) => state.theme.theme)
  const [chartData, setChartData] = useState<ChartData>({
  
    datasets: [
      {
        data: [80, 20], // Adjust values to match your desired proportions
        backgroundColor: ['#008000', '#000000', '#008000'],
        borderColor: ['#008000', '#000000', '#008000'],
        borderWidth: 1,
      },
    ],
  });



  return (
    <div className={`flex flex-col h-full  relative top-12 ${theme === 'light' ? 'bg-[#357937]': 'bg-[#2C2C2C]'} px-3 items-center justify-center w-72 min-w-80`}>
      {/* Profile Section */}
      <div className="flex flex-col absolute -top-9 items-center mb-8">
        <img
          src={avatar}
          alt="User Profile"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h2 className="font-semibold">Hey, ABCD</h2>
      </div>

      {/* Menu Options */}
      <nav className={`flex flex-col text-sm ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#1B1B1B]'} mt-20 py-3 w-full gap-1`}>
        <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-green-100 rounded-md">
        <CgMenuBoxed size={20} className="" />  All Tasks
        </button>
        <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-green-200  rounded-md">
        <BiCalendar size={20} className="" />  Today
        </button>
        <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-green-100 rounded-md">
        <FaRegStar size={20} className="" />  Important
        </button>
        <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-green-100 rounded-md">
        <FaRegMap size={20} className="" /> Planned
        </button>
        <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-green-100 rounded-md">
        <IoPersonAddOutline size={20} className="" />Assigned to me
        </button>

        </nav>

        <div className={`flex flex-col ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#1B1B1B]'}  mt-2 w-full g`}>
         <button className="flex items-center gap-2 p-5 text-gray-700 hover:bg-green-100 rounded-md">
           <span>➕</span> Add list
         </button>
        </div>
     

      {/* Circular Progress Graph */}
      <div className={`mt-5 ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#1B1B1B]'} bg-white w-full`}>
        <div className="flex flex-row justify-around p-3 items-center">
          <div>
        <h3 className="text-lg font-semibold mb-4">Today Tasks</h3>
        <span className="text-xl font-bold">11</span>
        </div>
        <IoIosAlert size={15}/>
        </div>
        <hr className="bg-neutral-600" />
        <div className="relative flex items-center justify-center w-32 h-32 mx-auto">
        <Doughnut data={chartData} />
        </div>
        <div className="mt-5 ml-4 flex gap-3  flex-row items-center text-xs text-gray-600">
           <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400"/> <span> Pending </span></span>
          <span className="flex gap-1 items-center"><div className="w-2 h-2 rounded-full bg-green-950" /><span> Done </span></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
