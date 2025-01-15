import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiNotification } from "react-icons/bi";
import { MdOutlineRepeat } from "react-icons/md";
import { CgCalendar } from "react-icons/cg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteTask, getTask } from "../store/TodoSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";


interface TaskDetailsProps {
    task: {
      id: string;
      task: string;
      completed: boolean;
      liked: boolean;
    };
  }
//   onLikeToggle: () => void;
//   onCompleteToggle: () => void;
//   onDelete: () => void;
// }

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
//   const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [notes, setNotes] = useState("");
  const [value, onChange] = useState<Value>(new Date());
  const [showCalendar, setShowCalender] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme)




  return (
    <div className={`flex relative flex-col w-96 min-w-80 ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#1B1B1B]'} text-xs h-[90vh] p-4 border-l-2 border-neutral-200`}>
      <div className="flex items-center justify-between border-t-2 border-neutral-300  mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
            // checked={task.completed}
            // onChange={onCompleteToggle}
          />
          <h2 className="text-sm text-gray-400" >
            {task.task}
          </h2>
        </div>
        <button
        //   onClick={onLikeToggle}
          className={`p-2   "text-green-500" "text-gray-500"}`}
        >
          <FaRegStar size={20} />
        </button>
      </div>

      <button className="flex border-t-2 border-neutral-300 items-center gap-2 p-4 text-gray-700 hover:bg-green-100 ">
        ➕ Add Step
      </button>

      <button className="flex border-t-2 border-neutral-300 items-center gap-2 p-4 text-gray-700 hover:bg-green-100 ">
        <BiNotification size={20} />
        Set Reminder
      </button>

      <button onClick={() => setShowCalender(prev => !prev)} className="flex items-center border-t-2 border-neutral-300 gap-2 p-4 text-gray-700 hover:bg-green-100">
        <CgCalendar size={20} />
        Add Due Date
      </button>

      {/* Add Due Date Section */}
     {showCalendar && <div className="p-4 mt-2 border-t-2 border-neutral-300 bg-white  shadow-sm">
          <Calendar className={`w-full`} onChange={onChange} value={value} /> 
      </div>} 

      <button className="flex items-center gap-2 p-2 border-t-2 border-neutral-300 text-gray-700 hover:bg-green-100  mt-2">
        <MdOutlineRepeat size={20} />
        Repeat
      </button>

      {/* Notes Section */}
      <div className="p-2 mt-2 border-t-2 border-neutral-300">
        <label className="block text-sm text-gray-600 mb-2">Add Notes</label>
        <textarea
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  rows={4}
  placeholder="Write your notes here..."
  className="w-full bg-transparent outline-none placeholder-gray-500"
/>

      </div>
      

      <div className="flex absolute bottom-2 w-[90%]
       self-end justify-between items-center ">
        <button onClick={() => dispatch(getTask(null))}><IoMdClose /></button>
        <span className="text-gray-400 text-sm">Created Today</span>
        <button
        onClick={() => dispatch(deleteTask(task.id))}
          className=" hover:text-red-700 p-4"
        >
          <RiDeleteBin6Fill size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
