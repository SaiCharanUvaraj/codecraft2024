import React from 'react'
import Std from '../components/Std'

export const Stdcoord = () => {
  return (
    <div className='text-white m-5 p-5'>
        <h1 className='text-3xl text-center font-semibold pt-5'>Student Co-Ordinator</h1>
        <div className='md:flex md:justify-center  text-center pt-5 gap-16 '>
            <div>
                <Std 
                name="Guru Sanjay" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 90032 68427"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Kamalesh Kumar Saravanan" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 70014 00312"
                />
            </div>
            <br />
            <div>
                <Std 
                name="xxxxxx" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 xxxxx xxxxx"
                />
            </div>
            <br />
            <div>
                <Std 
                name="xxxxxx" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 xxxxx xxxxx"
                />
            </div>
        </div>
    </div>
  )
}
