import {useState } from "react"

const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggleNav = () => {
            setTimeout(()=>setIsOpen(!isOpen),400)
        };
    return (
        <div className="">
            {!isOpen &&
                <button onClick={toggleNav} className="transition-all duration-300 hover:text-[#5F85DB] text-white
                hover:scale-125 active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            }
            {isOpen && 
                <div className="bg-[#5F85DB] lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 h-screen fixed right-0 top-0 shadow-[#5F85DB] shadow-2xl rounded-l-3xl">
                    <div className="flex justify-end p-5">
                        <button onClick={toggleNav} className="transition-all duration-300 hover:text-white text-black
                        hover:scale-125 active:scale-90">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor"     className="w-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="p-5 text-2xl text-black font-bold grid place-items-center gap-5">
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white">Home</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white">About us</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white">Event</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white">Our Team</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white">Sponsors</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white">Schedule</button>
                    </nav>
                </div>
            }
        </div>
    )
}
export default Sidebar