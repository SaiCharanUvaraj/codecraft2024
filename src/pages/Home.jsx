import React from 'react';
import Count from './Count';
import logo from '../assets/logo.png'
function Home() {
  return (
    <div className= 'text-white p-24' id="home">
      <div className='flex justify-center items-center'>
        <img className='pt-14 ' src={logo} alt="" />
      </div>
    </div>
    
  )
}
export default Home