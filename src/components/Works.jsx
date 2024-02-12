import React from 'react'
import Proyecto1 from '../assets/anime.png'
import Proyecto2 from '../assets/carrito.png'
import Proyecto3 from '../assets/clima.png'
import Proyecto4 from '../assets/mern.png'

const Works = () => {
    return (
        <div name='works' className='w-full md:h-screen text-gray-300 bg-[#131254]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Proyectos</p>
                    <p className='py-4 text-2xl'>Proyectos en los cuales e trabajado</p>
                </div>

                {/* container */}

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4  '>
                    {/* grid */}
                    <div style={{ backgroundImage: `url(${Proyecto1})` }} className='    group container rounded-md 
              flex justify-center  items-center mx-auto content-div'>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript + React
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://anime-search-rose.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                <button className='rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:bg-pink-600'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Proyecto2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center  items-center mx-auto content-div'>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript + React
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://carro-compra.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:bg-pink-600'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Proyecto3})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center  items-center mx-auto content-div'>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript + React
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://aplicacion-clima-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:bg-pink-600'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Proyecto4})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center  items-center mx-auto content-div'>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript-React-Node<br/>
                                Express-MongoDB
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://proyecto-blog-mern.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className='rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:bg-pink-600'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    

                    




                    
                </div>
            </div>
        </div>


    )
}

export default Works