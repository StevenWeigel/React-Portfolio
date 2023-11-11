import React from 'react'

const Education = () => {
  return (
    <div name='education' className='w-full h-fit sm:h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e] text-gray-300 duration-1000'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 duration-1000'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#059e5e]'>Education</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-10 px-4 duration-1000'>
                <div className='sm:text-right font-bold duration-1000'>
                    <p className='text-3xl '>North Dakota State University:</p>
                    <p className='text-xl my-1 font-normal'>Fargo, North Dakota</p>
                    <p className='text-lg font-normal'>Fall of 2019 - December of 2022</p>
                    <p className='text-2xl mt-6 sm:mt-12 duration-1000'>Bachelor of Science in Computer Engineering</p>
                    <p className='text-2xl mt-1 sm:mt-4 font-normal duration-1000'>Minor in Computer Science</p>
                    <p className='text-xl mt-5 sm:mt-10 font-normal duration-1000'>Honors: Cum Laude (GPA: 3.6/4.0)</p>
                    <p className='text-xl font-normal'>Deans List: (Fall 2019, Spring 2020, Fall 2020, Fall 2021, Fall 2022)</p>
                </div>
                <div>
                    <p className='text-2xl font-bold mt-6 sm:mt-0 duration-1000'>Extracurricular Involvement:</p>
                    <p className='text-base sm:text-lg mt-1 sm:mt-2 mb-16 sm:mb-0 duration-1000'>During my time at North Dakota State University, I actively participated in 
                    the Alpha Tau Omega fraternity, nationally recognized as the "Leadership Fraternity." Submersed in a culture 
                    that prioritized leadership development, I cultivated a diverse skill set seamlessly applicable to my 
                    career. Assuming various leadership roles, I fostered an environment conducive to collaboration and 
                    growth. A central responsibility included enhancing the academic performance of chapter members, 
                    showcasing my commitment to their holistic development. Additionally, I played a pivotal role in our 
                    collective efforts to contribute to the community of Fargo, North Dakota, through volunteering and 
                    philanthropy, resulting in our chapter winning numerous awards and recognition as one of the nation's top 
                    community benefactors. This experience instilled in me a profound sense of responsibility and a deep understanding 
                    of effective leadership qualities that I strive to apply in my professional journey.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education