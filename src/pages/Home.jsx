import React from 'react';
import Count from './Count';
import logo from '../assets/logo.png'
function Home() {
  return (
    <div className= 'text-white ' id="home">
      <div className='hidden justify-center items-center md:flex md:h-screen'>
        <img  className=' p-4 ' src={logo} alt="" />
      </div>
    </div>
    
  )
}
export default Home