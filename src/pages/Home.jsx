import React from 'react';
import Count from './Count';
import logo from '../assets/logo.png'
function Home() {
  return (
    <div className= 'text-white ' id="home">
      <div className='flex justify-center items-center h-screen'>
        <img  className=' p-4 ' src={logo} alt="" />
      </div>
    </div>
    
  )
}
export default Home