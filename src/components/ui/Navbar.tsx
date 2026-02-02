import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex max-w-7xl mx-auto justify-between px-2 py-4 items-center'>
            <div className='text-lg'>
                JobHunt
            </div>
            <div className='flex w-1/2 justify-around items-center'>
               <div className='flex justify-between w-96 font-bold cursor-pointer'>
                 <div>Home</div>
                <div>About</div>
                <div>Jobs</div>
                <div>Services</div>
                <div>Contact Us</div>
               </div>

               <div className='flex w-52 justify-around'>
                <button className='border-purple-700 border-4 w-20 py-2 font-bold cursor-pointer hover:bg-purple-800 hover:text-white rounded-lg duration-700 transition'>Login</button>
                <button className='bg-purple-700 text-white rounded-lg cursor-pointer hover:border-4 hover:border-purple-700 hover:text-black hover:bg-white transition duration-700 w-24 py-2 font-bold'>Register</button>
               </div>
            </div>
        </div>
    </>
  )
}

export default Navbar