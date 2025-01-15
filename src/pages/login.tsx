import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      navigate('/home'); // Redirect to home page after login
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Log in
      </button>
    </div>
  );
};

export default Login;
