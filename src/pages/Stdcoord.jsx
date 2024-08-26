import React from 'react'
import Std from '../components/Std'

export const Stdcoord = () => {
  return (
    <div className='text-white pt-32' id="contact">
        <h1 className=' text-4xl md:text-6xl text-center font-semibold font-outfit'>Student Co-Ordinator</h1>
        <div className='md:flex md:justify-center  text-center pt-5 gap-16 '>
            <div>
                <Std 
                name="Guru Sanjay R K" 
                />
            </div>
            <br />
            <div>
                <Std 
                name="Kamalesh Kumar Saravanan" 
                />
            </div>
            <br />
            <div>
                <Std 
                name="Yogesh M" 
                />
            </div>
        </div>
        <div className='md:flex md:justify-center  text-center pt-10 gap-16 '>
            <div>
                <Std 
                name="Ruthi Shankari S"  
                />
            </div>
            <br />
            <div>
                <Std 
                name="Sneha V" 
                />
            </div>
            <br />
            <div>
                <Std 
                name="Shahana Devi V" 
                />
            </div>
        </div>
    </div>
  )
}
