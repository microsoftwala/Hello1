import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='flex bg-white border-3 border-solid border-green justify-evenly'>
      <div className='flex items-center justify-end'>
        <div className='cursor-pointer pr-4 border-l border-r border-gray-500 pl-3'>
          Game
        </div>
        <div className=' cursor-pointer pr-4 border-r border-gray-500 pl-3'>
          Video
        </div>
        <div className='cursor-pointer pr-4 border-r border-gray-500 pl-3'>
          Apps
        </div>
      </div>
      <div className='search flex justify-center items-center mt-2'>
        <input type="text" placeholder="Search                            🔍" className="border-2 border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
    </div>
  );
}

export default Header;
