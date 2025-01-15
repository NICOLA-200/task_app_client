import React from 'react';
import { useSelector, } from 'react-redux';
import { RootState, } from './store/Store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/login';
import TaskPage from './pages/taskPage';



// import { RootState } from '@reduxjs/toolkit/query';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
 


  // Typed hooks



  return (
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route
            path="/task"
            element={isAuthenticated ? <TaskPage /> : <Login />}
          />

        </Routes>
          
      </Router>
  );
};

export default App;
