import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full h-fit lg:h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e] text-gray-300 duration-1000'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-4 sm:pb-8 pl-4 duration-1000'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#059e5e]'>Work Experience</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 px-4 duration-1000'>
                <div className='sm:text-right mt-3 sm:mt-0 font-bold text-3xl duration-1000'>
                    <p>John Deere:</p>
                    <p className='sm:mt-2 text-xl font-normal duration-1000'>May 2021 - Current</p>
                    <p className='text-xl sm:text-2xl mt-2 sm:mt-8 duration-1000'>Software Engineer</p>
                    <p className='sm:mt-1 text-xl font-normal duration-1000'>January 2023 - Current</p>
                    <p className='text-xl sm:text-2xl mt-2 sm:mt-8 duration-1000'>Product Engineering, </p>
                    <p className='text-xl sm:text-2xl duration-1000'>Part-Time Student</p>
                    <p className='sm:mt-1 text-xl font-normal duration-1000'>May 2021 - January 2023</p>
                </div>
                <div>
                    <p className='font-bold mt-4 mb-2 sm:my-0 sm:mb-0 sm:ml-3 text-xl sm:text-2xl duration-1000'>Responsibilities:</p>
                    <div>
                        <ul>
                            <li className='text-lg sm:text-xl my-3 duration-1000'>As an Embedded Software Engineer, I develop C code for 
                                Aurix TC3xx microcontrollers used in our Power Electronics hardware. I contribute to our Agile development 
                                process by developing C/C++ tools as engineering interfaces through CAN (J1939), documenting technical specs 
                                in Design Notes, and ensuring high-quality software releases by using thorough testing and debugging practices.</li>
                                {/*
                            <li className='text-lg sm:text-xl my-3 duration-1000'>- Contribute to the development of software within an Agile environment, 
                                actively participating in the entire Product Development Lifecycle. 
                                Conduct thorough code reviews for pull requests to ensure 
                                code quality and adherence to established standards.</li>
                            <li className='text-lg sm:text-xl my-3 duration-1000'>- Conduct detailed unit, integration, and systems verification 
                                and validation using various software tools.</li>
                            <li className='text-lg sm:text-xl mt-5 mb-20 sm:mt-7 duration-1000'>Part-time students at John Deere function as year-round interns. 
                                They assume full-time roles during the summer months and transition into 
                                part-time positions throughout the academic year. As a part-time student, my 
                                responsibilities closely resembled those of my full-time engineering 
                                role, albeit at a reduced level.</li>
                                */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work