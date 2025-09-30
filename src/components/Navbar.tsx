import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='container pt-8'>
        <div className="flex justify-between items-center bg-gradient-to-tr from-slate-700 to-slate-500 text-white sm:p-5 p-2 sm:rounded-full rounded-lg">
            <div className="sm:text-xl font-medium">Haseen Afridi</div>
            <ul className="gap-10 lg:gap-16 hidden md:flex">
                <li className='menuLink'><a href="#hero">Home</a></li>
                <li className='menuLink'><a href="#about">About</a></li>
                <li className='menuLink'><a href="#projects">Projects</a></li>
                <li className='menuLink'><a href="#skills">Skills</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
            <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} className='md:hidden' size={25} />
        </div>
        {isOpen && (
            <ul className="flex flex-col gap-5 mt-4 md:hidden bg-gradient-to-tr from-slate-700 to-slate-500 text-white p-5 rounded-lg">
                <li className='menuLink'><a href="#hero">Home</a></li>
                <li className='menuLink'><a href="#about">About</a></li>
                <li className='menuLink'><a href="#projects">Projects</a></li>
                <li className='menuLink'><a href="#skills">Skills</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
        )}
      
    </div>
  )
}

export default Navbar
