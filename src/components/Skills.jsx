import React from 'react'
import CLogo from '../assets/c_code.png'
import CPPLogo from '../assets/cpp_code.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/githubLogo.png'
import Golang from '../assets/golang.png'
import Java from '../assets/java.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-fit lg:h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e] text-gray-300 duration-1000'>
        
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#059e5e]'>Skills</p>
                <p className='py-4 text-lg'>These are the technologies that I have the most experience with:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 duration-1000'>
                <div className='rounded-xl shadow-md shadow-[#050d17] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CLogo} alt="C icon" />
                    <p className='my-3'>C</p>
                </div>
                <div className='rounded-xl shadow-md shadow-[#050d17] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Golang} alt="Golang icon" />
                    <p className='my-3'>Go</p>
                </div>
                <div className='rounded-xl shadow-md shadow-[#050d17] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPPLogo} alt="CPP icon" />
                    <p className='my-3'>C++</p>
                </div>
                <div className='rounded-xl shadow-md shadow-[#050d17] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p className='my-3'>GitHub - Version Control</p>
                </div>
                <div className='rounded-xl shadow-md shadow-[#050d17] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                    <p className='my-3'>Java</p>
                </div>
                <div className='rounded-xl shadow-md shadow-[#050d17] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-3'>React JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills