import React from 'react'
import Smiley from '../assets/smiley.png'
import Logo from '../assets/logo.png'
import Alarm from '../assets/alarm.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full: h-fit lg:h-screen text-gray-300 bg-gradient-to-r from-[#1d2269] to-[#059e5e]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#059e5e]'>Projects</p>
                <p className='pt-6 text-lg'>Check out some of my more recent personal projects:</p>
            </div>

            {/*Grid Item*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Smiley})`}} className='rounded-xl bg-[#ffffff] shadow-lg shadow-[#050d17] group container flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>
                
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-300 tracking-wider'>TSP Art Machine</span>
                        <div className='pt-8 text-center'>
                            <a href="https://youtu.be/0IladTpq5X4?si=ECxj6izQIHeY-dZH" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffffff35] text-white font-bold text-lg hover:scale-105 duration-300 hover:bg-gray-100 hover:text-black'>Demo</button>
                            </a>
                            <a href="https://github.com/StevenWeigel/TSP-Art" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffffff35] text-white font-bold text-lg hover:scale-105 duration-300 hover:bg-gray-100 hover:text-black'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Alarm})`}} className='rounded-xl shadow-lg bg-[#ffffff] shadow-[#050d17] group container flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>
                
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                        IoT Alarm Clock
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://youtu.be/LcnjzkFO3bg?si=oaVcCWm_5V5B3lnH" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffffff35] text-white font-bold text-lg hover:scale-105 duration-300 hover:bg-gray-100 hover:text-black'>Demo</button>
                            </a>
                            <a href="https://github.com/StevenWeigel/IOT-Alarm-Clock" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffffff35] text-white font-bold text-lg hover:scale-105 duration-300 hover:bg-gray-100 hover:text-black'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Logo})`}} className='rounded-xl shadow-lg shadow-[#050d17] bg-[#fffffff0] group container flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>
                
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                        Portfolio Using React JS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffffff35] text-white font-bold text-lg hover:scale-105 duration-300 hover:bg-gray-100 hover:text-black'>Demo</button>
                            </a>
                            <a href="https://github.com/StevenWeigel/React-Portfolio" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffffff35] text-white font-bold text-lg hover:scale-105 duration-300 hover:bg-gray-100 hover:text-black'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects