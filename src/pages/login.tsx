import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const [error, setError] = useState(false) // Initialize navigate

  const handleLogin = () => {
    if (username.trim() && password == '12345') {
      dispatch(login({ username }));
      navigate('/task'); // Redirect to home page after login
    } else {
        setError(true)
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center space-y-4">
        <div className='justify-center flex flex-col gap-5 items-center'>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md"
      />

<input
        type="text"
        placeholder="Enter username"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md"
      />
      {error && <span className='text-red-600 text-xs'>wrong password</span> }
       <span className='text-xs'>12345 is the key</span>
      
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-neutral-500 w-full text-white rounded-md"
      >
        Log in
      </button>
      </div>
    </div>
  );
};

export default Login;
