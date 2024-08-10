import React from 'react'

function Home() {
  return (
        <div className='md:flex items-center justify-center gap-x-44 text-white pt-32 p-6 h-screen' id="home">
            <div className='p-5'>
                <p className='font-serif text-white text-7xl text-center hover:text-orange-700 duration-75'>CODECRAFT</p>
            </div>
            <div className='rounded-2xl p-5 flex justify-center ' >
                <img className='rounded-3xl w-full max-w-xs md:max-w-md lg:max-w-lg' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNraXpsNTBndXh5amExeHExNXl4dDAyMDM5bnZ5dGx2Zzd0emJneSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SpopD7IQN2gK3qN4jS/giphy.webp" alt="" />
            </div>
        </div>
  )
}
export default Home