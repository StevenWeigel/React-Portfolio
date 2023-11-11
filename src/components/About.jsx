import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-fit sm:h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e] text-gray-300 duration-1000'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-10'>
                <div className='sm:text-right pb-4 sm:pb-8 pl-4 duration-1000'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#059e5e]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 px-4 duration-1000'>
                <div className='sm:text-right text-2xl sm:text-3xl font-bold mb-2 sm:mb-0 duration-1000'>
                    <p>Hi, I'm Steven, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-base sm:text-xl mb-20 sm:mb-0 duration-1000'>I am a dedicated software engineer passionate about 
                        creating exceptional solutions to improve individuals' 
                        and communities' well-being. My mission is to address 
                        intricate challenges with innovation, efficiency, and 
                        a user-centric approach, ultimately enhancing the 
                        quality of life. With substantial industry experience 
                        in lower-level embedded software and a strong 
                        foundation in object-oriented programming, I am 
                        committed to delivering cutting-edge solutions that 
                        exceed evolving world needs. My portfolio reflects 
                        my unwavering commitment to software engineering 
                        excellence, lifelong learning, and a relentless pursuit 
                        of meaningful impact through technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About