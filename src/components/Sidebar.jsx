import { useState, useEffect } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setTimeout(() => setIsOpen(!isOpen), 400);
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
        <div>
            {(!isOpen && screenWidth < 992) &&
                <button onClick={toggleNav} className="transition-all duration-300 hover:text-[#5F85DB] text-white hover:scale-125 active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            }
            {(!isOpen && screenWidth > 992) &&
                <nav className="text-xl text-white font-bold flex space-x-10 pr-2 ">
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('prize')}>Prize</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('domain')}>Domains</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('contact')}>Contact</button>
                    <button className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 hover:text-blue-500" onClick={() => scrollToSection('Infosection')}>Instructions</button>
                </nav>
            }
            <div className={`bg-white/10 backdrop-blur-2xl lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 h-screen fixed top-0 right-0 rounded-l-3xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
                <div className="flex justify-end p-5">
                    <button onClick={toggleNav} className="transition-all duration-300 hover:text-white text-black hover:scale-125 active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="p-5 text-2xl text-white font-bold grid place-items-center gap-5">
                    <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('prize')}>Prize</button>
                    <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('domain')}>Domains</button>
                    <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('contact')}>Contact</button>
                    <button className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white" onClick={() => scrollToSection('instruction')}>Instructions</button>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
