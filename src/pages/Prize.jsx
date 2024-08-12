import React from 'react';
import Navbar from '../components/Navbar';
import prizeImage from '../assets/pri-removebg-preview.png'; // Import the PNG image

const Prize = () => {
  return (
    <div>
      <Navbar />
      <div id='cover-screen' className='flex justify-center items-center h-96'>
        <img src={prizeImage} alt='Prize' className='w-full h-full object-cover' />
        <div className='text-center p-2 absolute text-black font-bold'>
          <h1 className='text-3xl font-bold'>Prize Pool</h1>
          <p className='font-bold'>Welcome to our Prize Pool section! <br />Find exciting details about rewards and prizes.</p>
        </div>
      </div>
      <div className='p-2'>
        <p className='font-bold text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis obcaecati, perferendis, quibusdam labore quia ipsum, illum tempora porro culpa magni animi hic facere vel harum excepturi odit magnam.</p>
      </div>
    </div>
  );
};

export default Prize;