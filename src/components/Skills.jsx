import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import SQL from '../assets/ctm.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import GIT from '../assets/git.png';
import Mongo from '../assets/mongo.png';
import Express from '../assets/expressjs-icon.png';
import Postman from '../assets/postman2.png';
import Nodejs from '../assets/nodejs.png';
import Firebaseicon from '../assets/firebase-icon.png';
import typescript from '../assets/typescript.png';
import postgresql from '../assets/postgresql.png';

const Skills = () => {
    return (
        <div name='skills' id='skills' className='w-full h-auto bg-[#212934] text-gray-300 pt-8'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-[#f4d286] border-pink-600'>Habilidades</p>
                    <p className='py-4 text-[#a89365]'>Algunas de las tecnologías con las cuales he trabajado.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="icono html" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="icono css" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="icono javascript" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="icono react" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typescript} alt="icono typescript" />
                        <p className='my-4'>Typescript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="icono github" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="icono tailwind" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SQL} alt="icono sql" />
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GIT} alt="icono git" />
                        <p className='my-4'>Git</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="icono mongodb" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Express} alt="icono express" />
                        <p className='my-4'>Express</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Postman} alt="icono postman" />
                        <p className='my-4'>Postman</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='mx-auto max-w-full h-auto' src={Nodejs} alt="icono nodejs" />
                        <p className='my-4'>Node.js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Firebaseicon} alt="icono firebase" />
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={postgresql} alt="icono postgresql" />
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
