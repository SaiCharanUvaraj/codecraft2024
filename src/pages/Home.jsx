import React from 'react';
import Count from './Count';
import logo from '../assets/logo.png'
function Home() {
  return (
<<<<<<< HEAD
    <div className= 'text-white p-24' id="home">
      <div className='flex justify-center items-center'>
        <img className='pt-14 ' src={logo} alt="" />
=======
    <div className='md:flex items-center justify-center gap-x-20 text-white pt-32 pb-2 p-6 h-screen' id="home">
      <div className='p-5 w-3/4'>
        <p className='font-serif text-white text-9xl text-center hover:text-orange-700 duration-75'>CODECRAFT</p>
        <br></br>
        <br></br>
        <Count />
      </div>
      <div className='flex justify-start ml-[-50px] md:ml-[-100px] lg:ml-[-150px] p-5 ' >
        <img className='rounded-3xl w-full max-w-xs md:max-w-md lg:max-w-lg' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNraXpsNTBndXh5amExeHExNXl4dDAyMDM5bnZ5dGx2Zzd0emJneSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SpopD7IQN2gK3qN4jS/giphy.webp" alt="" />
>>>>>>> khushi
      </div>
    </div>
    
  )
}
export default Home