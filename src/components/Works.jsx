import React from 'react'
import Proyecto1 from '../assets/animegoist.png'
import Proyecto2 from '../assets/carrito.png'
import Proyecto3 from '../assets/clima.png'
import Proyecto4 from '../assets/mern3.png'
import HTML from '../assets/html.png';
import Cssimg from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Mongo from '../assets/mongo.png';
import Express from '../assets/expresss.png';
import Postman from '../assets/postman2.png';
import Nodejs from '../assets/nodejs.png';
import Nodeee from '../assets/nodee.png';
import Firebaseicon from '../assets/firebase-icon.png';
import Typescript from '../assets/typescript.png'
import PostgreSQL from '../assets/postgresql.png'


const Works = () => {
    return (
        <div name='works' className='w-full md:h-screen text-[#f2ebe3] bg-[#212934]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#f4d286] border-pink-600 '>Proyectos</p>
                    <p className='py-4 text-2xl text-[#a89365]'>Proyectos en los cuales e trabajado</p>
                </div>

                {/* container */}





                

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4  pb-40'>
                    {/* grid */}
                    

                    {/* -------------------------------------------------------------------- */}

                    <div style={{ backgroundImage: `url(${Proyecto1})` }} className='    group container rounded-md 
              flex justify-center  items-center mx-auto content-div'>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                AnimeGoist
                            </span>
                            {/** icons*/}
                            <div className='flex items-center justify-center pt-8'>
                                <img className='w-10 mx-auto' src={Cssimg} alt="icono html" />
                                <img className='w-10 mx-auto' src={Typescript} alt="icono html" />
                                <img className='w-20 mx-auto' src={Nodeee} alt="icono html" />
                                <img className='w-20 mx-auto' src={Express} alt="icono html" />
                                

                                <img className='w-10 mx-auto' src={ReactImg} alt="icono html" />
                                <img className='w-20 mx-auto' src={PostgreSQL} alt="icono html" />

                            </div>
                            {/**  */}

                            <div className='pt-8 text-center'>
                                <a href="https://animegoist.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                    <button className='rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:bg-pink-600'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>


                    {/* --------------------------------------------------------------- */}

                    <div style={{ backgroundImage: `url(${Proyecto4})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center  items-center mx-auto content-div'>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider flex justify-center items-center pb-2'>
                                Blog MERN
                            </span>
                            <br/>
                            {/** icons*/}
                            <div className='flex items-center justify-center  '>
                                <img className='w-10 mx-auto' src={JavaScript} alt="icono html" />
                                <img className='w-10 mx-auto' src={ReactImg} alt="icono html" />
                                <img className='w-10 mx-auto' src={Mongo} alt="icono html" />
                                <img className='w-20 mx-auto' src={Express} alt="icono html" />
                                <img className='w-20 mx-auto' src={Nodejs} alt="icono html" />
                                <img className='w-10 mx-auto' src={Firebaseicon} alt="icono html" />

                            </div>
                            {/**  */}
                            <div className='pt-4 text-center'>
                                <a href="https://udfh-blog.vercel.app/" target="_blank" rel="noopener noreferrer">
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
                                Carrito de compras
                            </span>
                            {/** icons*/}
                            <div className='flex items-center justify-center pt-8'>
                            <img className='w-10 mx-auto' src={Cssimg} alt="icono html" />
                                <img className='w-10 mx-auto' src={JavaScript} alt="icono html" /> 
                                <img className='w-10 mx-auto' src={ReactImg} alt="icono html" />

                            </div>
                            {/**  */}

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
              flex justify-center  items-center mx-auto content-div '>


                        {/** efectos hover */}

                        <div className='opacity-0 group-hover:opacity-100 pb-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicacion clima
                            </span>
                            {/** icons*/}
                            <div className='flex items-center justify-center pt-8'>
                            <img className='w-10 mx-auto' src={Cssimg} alt="icono css" />
                                <img className='w-10 mx-auto' src={JavaScript} alt="icono html" />
                                <img className='w-10 mx-auto' src={ReactImg} alt="icono html" />

                            </div>
                            {/**  */}

                            <div className='pt-8 text-center'>
                                <a href="https://aplicacion-clima-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
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