import React from "react";
import { FaSearch, FaTh, FaMoon, FaSun  } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/Store';
import { toggleTheme } from '../store/themeSlice';
import logo from '../assets/logo.png'
import { toggleMenu } from "../store/controllerSlice";



const Header: React.FC = () => {

  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="flex justify-between items-center px-6 py-4   shadow-md">
       <div className="flex flex-row gap-2 items-center justify-center">
        <button onClick={() => dispatch(toggleMenu())}> <BiMenu className="" size={18} /> </button>
      {/* Logo */}
      <div className="text-2xl font-bold ">
        <img src={logo} alt="logo" />
      </div>
      </div> 

      {/* Right-side icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button
          className="p-2 rounded-full hover:bg-gray-700"
          aria-label="Search"
        >
          <FaSearch className="" size={18} />
        </button>

        {/* Grid Icon */}
        <button
          className="p-2 rounded-full hover:bg-gray-700"
          aria-label="Layout"
        >
          <FaTh className="" size={18} />
        </button>

        {/* Dark Mode Toggle */}
        <button
          className="p-2 rounded-full hover:bg-gray-700"
          aria-label={theme ? "ligth" : "Switch to dark mode"}
          onClick={() => dispatch(toggleTheme())}
        >
          {theme !== 'dark' ? (
            <FaSun className="text-yellow-500" size={18} />
          ) : (
            <FaMoon className="" size={18} />
          )}
        </button>

            {/* <h1 className='text-red-600 text-2xl'>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
       <p className='text-red-600'>hello</p> */}
      </div>
    </header>
  );
};

export default Header;
