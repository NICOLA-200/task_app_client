import React from 'react';
import { useSelector, } from 'react-redux';
import { RootState, } from './store/Store';
import Header from './components/Header'
import './index.css'
import RightPart from './components/TaskArea';
import LeftPart from './components/Sidebar';
import TaskDetails from './components/TaskDetail';
// import { RootState } from '@reduxjs/toolkit/query';

const App: React.FC = () => {
  // Typed hooks
  const theme = useSelector((state: RootState) => state.theme.theme);
  const control   = useSelector((state: RootState) => state.controller.showMenu)
  const taskDetail  = useSelector((state:RootState) => state.tasks.selectedTask)


  return (
    <div className={`h-screen w-screen ${theme === 'dark' ? 'dark' : 'light'}`}>
       <Header/>
      <section className='flex flex-row p-4'>

       { control && <LeftPart/> }
        <RightPart/>

       {taskDetail != null && <TaskDetails task={taskDetail}  />} 
      </section> 
    </div>
  );
};

export default App;
