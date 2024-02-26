import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillBoxSeamFill, BsPersonVcard } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[40px] flex-direction-row justify-between items-center px-4 bg-[#212934] text-[#170f0a]'>


            {/* Menu */}

            <ul className='hidden md:flex h-full text-xl font-bold justify-end' >
                <li className='flex items-center  rounded-l-lg hover:bg-[#82b7a6] text-[#f4d286] border-b-4 border-pink-600 border-solid border-r-0 border-l-4'>
                    <Link to="home" smooth={true} duration={500}> Home
                    </Link>
                </li>
                <li className='flex items-center  hover:bg-[#82b7a6] text-[#f4d286] border-b-4 border-pink-600'>
                    <Link to="about" smooth={true} duration={500}>About
                    </Link>
                </li>
                <li className='flex items-center hover:bg-[#82b7a6] text-[#f4d286] border-b-4 border-pink-600'>
                    <Link to="skills" smooth={true} duration={500}> Skills
                    </Link>
                </li>
                <li className='flex items-center hover:bg-[#82b7a6] text-[#f4d286] border-b-4 border-pink-600'>
                    <Link to="works" smooth={true} duration={500}> Work
                    </Link>
                </li>
                <li className='flex items-center rounded-r-lg hover:bg-[#82b7a6] text-[#f4d286] border-b-4 border-pink-600'>
                    <Link to="contact" smooth={true} duration={500}> Contact
                    </Link>
                </li>
            </ul>

            {/* prueba */}
            <div onClick={handleClick} className='md:hidden z-10 '>
                {!nav ? <FaBars style={{color: '#f4d286'}}/> : <FaTimes />}
            </div>
            {/* mobile */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#212934] text-[#f4d286] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}> Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="works" smooth={true} duration={500}> Work
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact
                </Link></li>
            </ul >
            {/*iconos media */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>

                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/alejandro-pe%C3%B1a-fern%C3%A1ndez-614b452b3/" target="_blank" rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
    <a className='flex justify-between items-center w-full text-gray-300'
        href="https://github.com/zcrile" target="_blank" rel="noopener noreferrer">
        GitHub <FaGithub size={30} />
    </a>
</li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#611FB6]'>
                        <Link to="contact" smooth={true} duration={500} className="w-full h-full flex justify-between items-center">
                            <a className='flex justify-between items-center w-full text-gray-300'>
                                Email <HiOutlineMail size={30} />
                            </a>
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0EC45E]'>

                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href="https://drive.google.com/file/d/1Q3b1PkxfhFf93aLdkFedky3Cq9bY49Cd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            CV <BsPersonVcard size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
