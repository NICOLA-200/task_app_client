import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiRevision } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  toggleCompleted,
  toggleLiked,
  getTask

} from "../store/TodoSlice";
import { RootState } from "../store/Store";



const TaskArea: React.FC = () => {

  const [newTask, setNewTask] = React.useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const theme = useSelector((state : RootState) => state.theme.theme)


  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };


  return (
    <div className="flex flex-col w-full h-[90vh] overflow-auto p-3">
      {/* Header Section */}
      <div className=" w-full p-5 mb-6">
        <h1 className=" font-bold text-gray-300">To Do</h1>

        <div className={`w-full ${theme === 'light' ? 'bg-[#EEF6EF]' : 'bg-[#1B1B1B]'} py-3  pt-6 gap-24 space-y-8 flex-col`}>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="todo..."   className={`w-full focus:outline-none focus:ring-0 focus:border-transparent h-4 p-5 ${theme === 'light' ? 'bg-[#EEF6EF]' : 'bg-[#1B1B1B]'} `}/>
          <div className="flex items-center justify-between gap-4">
          <div>
          <button className="p-2 ml-2 rounded-full text-gray-500 hover:bg-gray-100">
            <IoIosNotificationsOutline size={24} />
          </button>
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
            <BiRevision size={24} />
          </button>
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <CgCalendar size={24} />
          </button>
          </div>
          <button onClick={handleAddTask} className="px-4 py-2 bg-neutral-200 text-green-700 rounded-lg hover:bg-green-600">
            Add Task
          </button>
        </div>

        </div>


      </div>

      {/* Task List */}
      <div className="flex flex-col">
        {/* Pending Tasks */}
        <h2 className=" font-semibold text-gray-700 mb-2">Add A Task</h2>
        <ul className="space-y-2 text-sm">
          {tasks
           ?.filter((task) => !task.completed)
           .map(
            (task, index) => (
              <div
                onClick={() => dispatch(getTask(task.id))}
                key={index}
                
                className={`flex items-center  justify-between p-2 border-b-2  border-neutral-200  hover:shadow-sm `}
              >
                <div  className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleCompleted(task.id))}
                    className="w-3 h-3 text-green-500 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700">{task?.task}</span>
                </div>
                <button onClick={() => dispatch(toggleLiked(task.id))} className="p-2 text-gray-500 hover:text-gray-800">
                 <FaStar size={18} className={` ${task.liked ? "text-black" : "text-neutral-200 " }`}/>
                </button>
              </div>
            )
          )}
        </ul>

        {/* Completed Tasks */}
        <h2 className=" font-semibold text-gray-700 mt-6 mb-3">
          Completed
        </h2>
        <ul className="space-y-2 text-sm">
          {tasks
           ?.filter((task) => task.completed)
          .map(
            (task, index) => (
              <div
                onClick={() => dispatch(getTask(task.id))}
                key={index}
                className="flex items-center justify-between  p-2 border-t-2 border-neutral-200 "
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-3 h-3 text-green-500 rounded"
                    checked
                    readOnly
                  />
                  <span className="text-gray-500 line-through">{task?.task}</span>
                </div>
                <button onClick={() => dispatch(toggleLiked(task.id))} className="p-2 text-gray-500 hover:text-gray-800">
                 <FaStar size={18}  className={` ${task.liked ? "text-black" : "text-neutral-200" }`}/>
                </button>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskArea;
