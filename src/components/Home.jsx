import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#212934]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#c64a38]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#82b7a6]'>
                    Alejandro Peña
                </h1>
                <h2 className='text-4xl mb-8 sm:text-7xl font-bold text-[#f4d286]'>
                    Desarrollor De Software
                </h2>
                
                <div>
                <Link to="works" smooth={true} duration={500} className="flex items-center">
  <button className='text-white group border-2 px-6 py-3 my-2 font-bold flex items-center hover:bg-[#82b7a6] hover:border-[#82b7a6]'>
    Work
    <span className='group-hover:rotate-90 duration-300 ml-3'>
      <HiArrowNarrowRight />
    </span>
  </button>
</Link>
                </div>
            </div>
        </div>
    )
}

export default Home