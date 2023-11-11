import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ( ) => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-0 bg-gradient-to-r from-[#191c52] to-[#047546] text-gray-300'>
        <ul className = 'flex'>
        <div className='mt-0.5 hover:scale-110 duration-500'>
            <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="Logo Image" style={{width: '70px'}}/>
            </Link>
        </div>
        <div className='rounded-md bg-blue-600 p-0.5 my-2 ml-4 hover:scale-110 duration-500'>
            <a className='flex justify-between items-center w-full text-gray-300' 
                        href="https://linkedin.com/in/steven-weigel" target="_blank"><FaLinkedin size={55}/>
            </a>
        </div>
        </ul>

        {/* main menu*/}
        <ul className='hidden md:flex'>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
            </div>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
            </div>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="work" smooth={true} duration={500}>Experience</Link>
                </li>
            </div>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="education" smooth={true} duration={500}>Education</Link>
                </li>
            </div>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
            </div>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
            </div>
            <div className='hover:scale-125 duration-300'>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </div>
        </ul>

        {/*Horizontal Lines*/}
        <div onClick={(handleClick)} className='md:hidden z-10 mr-5 text-2xl hover:scale-125 duration-300'>
            {!nav ? <FaBars /> : <FaTimes className='text-black'/>}
        </div>

        {/*Mobile*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#cdd7f7] text-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>Experience</Link>
            </li>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="education" smooth={true} duration={500}>Education</Link>
            </li>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl hover:scale-125 duration-300'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
            <ul>
                <li className=' rounded-tr-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 hover:rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://linkedin.com/in/steven-weigel" target="_blank">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/StevenWeigel?tab=repositories" target="_blank">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='rounded-br-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] hover:rounded-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="mailto:steveo.j.weigel@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
{/* Commenting out section for resume. Might add back later
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/" download>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
*/}
            </ul>
        </div>
    </div>
  )
}

export default Navbar