import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#131254] flex justify-center items-center p-4'>
        <form method="POST" action='https://getform.io/f/eac68a08-81f5-447a-a44f-4724885c115e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'>Completa el formulario para contactarme</p>
            </div>
            <input className='my-1 p-2 bg-[#ccd6f6]' type="text" placeholder='Nombre' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] ' type="email" placeholder='Correo' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="mensaje"  placeholder='Mensaje' rows="10"></textarea>
            <button className='bg-green-700 text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>

    </div>
  )
}

export default Contact

