import React, { useState } from 'react';
import { MdHome } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsCross } from "react-icons/tb";
function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
    return (
        <div >
            <div className='text-gray-700 md:col-span-1 md:flex md:justify-end'>
                <nav className='text-right'>
                    <div className='flex justify-between items-center'>
                    <div className='font-bold uppercase p-4 text-2xl ml-6 mt-3 font-sans'>
                        <h1><a href='https://www.amazon.in/'>Recipe Finds</a></h1>
                    </div>
                    <div className='px-4 cursor-pointer'>
                    <GiHamburgerMenu  className={`${isMenuOpen && 'hidden'}`} size={25} onClick={toggleMenu}/>
                    <TbArrowsCross className={`${!isMenuOpen && 'hidden'}`}  size={25}onClick={toggleMenu}/>
                    </div>
                    </div>
                    
                <ul className={`font-sm mb-6 ${!isMenuOpen && 'hidden'} md:block transition-all duration-300 ease-in-out`}>
                    <li className='text-gray-700 font-bold py-1'>
                        <a  className='px-4 flex justify-end border-r-4 border-red-400' href='https://www.amazon.in/'><span className='mt-1'>Home</span><MdHome  size={25}className='mt-1 ml-3'/></a>
                    </li>
                    <li className='py-1'>
                        <a className='px-4 flex justify-end ' href='https://www.amazon.in/'><span className='mt-1'>Contact</span><IoIosContact  size={25}className='mt-1 ml-3' /></a>
                    </li>
                    <li className='py-1'>
                        <a  className='px-4 flex justify-end' href='https://www.amazon.in/'><span>About</span><MdOutlineRoundaboutLeft size={25}className='mt-1 ml-3'/></a>
                    </li>
        
                </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
