import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-fit lg:h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e] text-gray-300 duration-1000'>
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
                    <p className='text-lg sm:text-xl mb-20 lg:mb-0 duration-1000'>I am an embedded software engineer dedicated to 
                        creating impactful solutions that improve well-being 
                        for individuals and communities. With expertise in 
                        lower-level embedded software and a solid background 
                        in object-oriented programming, I tackle complex 
                        challenges with innovation, efficiency, and a focus 
                        on practical, real-world applications. My portfolio 
                        demonstrates a commitment to excellence, continuous 
                        earning, and meaningful impact through technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About