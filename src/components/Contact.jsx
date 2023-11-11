import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen bg-gradient-to-r from-[#1d2269] to-[#059e5e] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a7e31be7-150d-4090-8611-612af9a769d8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#059e5e] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-lg'>Submit the form below or send me an email at steveo.j.weigel@gmail.com</p>
            </div>
            <input className='p-2 bg-[#cdd7f7] rounded' type="text" placeholder='Name' name='name' />
            <input className='my-5 p-2 bg-[#cdd7f7] rounded' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#cdd7f7] p-2 rounded' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-gradient-to-br from-[#54c967b9] to-[#1664daa8] px-4 py-3 my-8 rounded-3xl mx-auto flex items-center hover:scale-110 duration-500'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact