import React from 'react'
import Navbar from '../components/Navbar'
const Prize = () => {
  return (
    <div>
      <Navbar />
      <div
        id='cover-screen'
        className='flex justify-center items-center h-96 bg-cover bg-no-repeat text-white'
        
      >
        <div className='text-center p-2'>
          <h1 className='text-3xl'>Prize Pool</h1>
          <p>Welcome to our Prize Pool section! <br />Find exciting details about rewards and prizes.</p>
        </div>
      </div>
      <div className='p-2'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis obcaecati, perferendis, quibusdam labore quia ipsum, illum tempora porro culpa magni animi hic facere vel harum excepturi odit magnam.</p>
      </div>
    </div>
  )
}

export default Prize