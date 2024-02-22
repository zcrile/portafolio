import React from 'react'
import IMG  from '../assets/Captura de pantalla 2024-02-20 200646.png'




export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#131254] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p>Egresado de Ingenieria en computación e informatica</p>
              <img src={IMG} alt="" className="mt-8 rounded-full" style={{ width: '25rem', height: '25rem', marginLeft: '50px' }} />
            </div>
            
            <div className='text-justify'>
              <p >Apasionado de la tecnologia con dos años de experiencia en el area de redes y conectividad prestando servicios a empresas como Forestal Arauco, Cmpc, Salazar israel entre otros <br/><br/>
                Mi enfoque principal es el Frontend actualmente aprendiendo Back todo en base a frameworks derivados de JS. Mientras cursaba tuve acercamientos a lenguajes como C#, C++, Java, pero actualmente no son mi fuerte<br/><br/>
                 Me gusta el trabajo en equipo y tengo experiencia trabajando bajo presión lo que me ha permitido colaborar eficazmente en entornos dinámicos y acelerados<br/><br/>
                 Ademas de la programacion me gusta el armado de pcs de enfoque gamer por lo cual me gusta estar actualizado en cuanto a lanzamientos de nuevas tarjetas de video u procesadores y fuera del ambito tecnologico disfruto del futbol,series, anime, peliculas, Mtb enduro y obviamente jugar en la pc. <br/><br/>
                 Estoy emocionado por lo que el futuro depara y estoy comprometido a  seguir aprendiendo y creciendo profesionalmente con la ilusion de ver hasta donde se puede llegar con esta hermosa carrera. </p>  
            </div>
            
          </div>
      </div>
    </div>
  )
}
export default About;