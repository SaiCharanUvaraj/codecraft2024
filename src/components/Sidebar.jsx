import {useState } from "react"
import { useEffect } from "react";

const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggleNav = () => {
            setTimeout(()=>setIsOpen(!isOpen),400)
        };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        };
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);    
    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
          
    return (
        <div className="">
            {(!isOpen&&screenWidth<992) &&
                <button onClick={toggleNav} className="transition-all duration-300 hover:text-[#5F85DB] text-white
                hover:scale-125 active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            }
            {(!isOpen&&screenWidth>992) &&
                <nav className="text-xl text-white font-bold flex space-x-10 pr-2">
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('prize')}>Prize</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('domain')}>Domains</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('contact')}>Contact</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('instuction')}>Instructions</button>
                </nav>
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
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('home')}>Home</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('prize')}>Prize</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('domain')}>Domains</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('contact')}>Contact</button>
                        <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('instruction')}>Instuctions</button>
                    </nav>
                </div>
            }
        </div>
    )
}
export default Sidebar