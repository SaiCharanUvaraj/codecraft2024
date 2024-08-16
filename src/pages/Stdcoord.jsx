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
                no="+91 90032 68427"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Kamalesh Kumar Saravanan" 
                no="+91 70014 00312"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Yogesh M" 
                no="+91 87545 12892"
                />
            </div>
        </div>
        <div className='md:flex md:justify-center  text-center pt-10 gap-16 '>
            <div>
                <Std 
                name="Ruthi Shankari S"  
                no="+91 94863 08851"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Sneha V" 
                no="+91 73055 00879"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Shahana Devi V" 
                no="+91 80151 35548"
                />
            </div>
        </div>
    </div>
  )
}
