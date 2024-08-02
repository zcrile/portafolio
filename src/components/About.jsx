import React from 'react'
import IMG from '../assets/Captura de pantalla 2024-02-20 200646.png'

export const About = () => {
  return (
    <div name='about' id='about' className='w-full h-auto bg-[#212934] text-gray-300 pt-8 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#82b7a6]'>
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold text-[#f4d286]'>
            <p>Titulado de Ingenieria en computación e informatica</p>
            <img src={IMG} alt="" className="mt-8 rounded-full w-full sm:w-[25rem] h-auto" />
          </div>
          <div className='text-justify text-[#a89365] mb-96'>
            <p>Apasionado de la tecnologia con un año de experiencia mi enfoque principal es el Frontend actualmente mejorando en Backend todo en base a frameworks derivados de JS tales como NodeJs, Express entre otros. <br/><br/>
              Me gusta el trabajo en equipo y tengo experiencia trabajando bajo presión lo que me ha permitido colaborar eficazmente en entornos dinámicos y acelerados<br/><br/>
              Ademas de la programacion me gusta el armado de pcs de enfoque gamer por lo cual me gusta estar actualizado en cuanto a lanzamientos de nuevas tarjetas de video u procesadores y fuera del ambito tecnologico disfruto del futbol,series, anime, peliculas, Mtb enduro y obviamente jugar en la pc. <br/><br/>
              Estoy emocionado por lo que el futuro depara y estoy comprometido a  seguir aprendiendo y creciendo profesionalmente con la ilusion de ver hasta donde se puede llegar con esta hermosa carrera.
            </p>  
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
