
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import Face from '../assets/face.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name='home' className= 'w-full h-fit lg:h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e]'>


        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='max-w-[200px] lg:max-w-[350px] pt-20 lg:pt-0 duration-1000'>
                <img src={Face} alt="My Face Image"/>
            </div>
            <p className='text-[#cdd7f7] py-2 text-2xl sm:text-3xl font-bold duration-1000'>Hello, I'm</p>
            <h1 className= {'text-3xl sm:text-5xl md:text-7xl font-bold text-[#cdd7f7] duration-1000'}>
            <TypeAnimation
                sequence={[
                    '',
                    225,
                    'Steven Weigel',
                    2500,
                    '',
                    225,
                    'A Software Engineer',
                    1250
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
            />
            </h1>
            <p className='text-[#cdd7f7] text-lg py-1 sm:py-4 max-w-[700px] sm:text-xl duration-1000'>
                Welcome to my digital portfolio, created with React JS 
                and styled using Tailwind CSS! Explore my software 
                engineering journey, including work experience, education, 
                skills, and projects. Thanks for visiting!
            </p>
            <div className='mb-16'>
                <Link to="contact" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-3 rounded-3xl flex items-center hover:bg-gradient-to-tr from-[#54c967b9] to-[#1664daa8] hover:scale-110 duration-1000'>Contact Me
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiArrowNarrowRight className='ml-4 text-xl'/>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home