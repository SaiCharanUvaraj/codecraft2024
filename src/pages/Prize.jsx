import React from 'react'
import Navbar from '../components/Navbar'

const Prize = () => {
  return (
    <div >
        <Navbar/>
        <div style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/realistic-oscars-film-awards-background_23-2151250619.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid")',
      }} 
      id='cover-screen' className=' img flex justify-center align-middle  items-center h-screen bg-cover bg-no-repeat text-white'>
            <div className='p-20'>
                <h1 className='text-7xl  text-center p-2'>Prize Pool</h1>
                <p className='text-center pt-9 '>Welcome to our Prize Pool section! <br />You can find all the exciting details about the rewards and prizes up for grabs in our events.</p>
            </div>
        </div>
        <div className='p-5'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis obcaecati, perferendis, quibusdam labore quia ipsum, illum tempora porro culpa magni animi hic facere vel harum excepturi odit magnam. Quod, corrupti.</p>
        </div>
    </div>
  )
}

export default Prize