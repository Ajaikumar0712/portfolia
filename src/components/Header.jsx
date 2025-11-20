import React, { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="w-full flex justify-center fixed top-5 z-50 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 50,
                        damping: 20,
                        delay: 0.2,
                        mass: 0.5,
                    }}
                    className="w-full max-w-4xl bg-black/30 backdrop-blur-lg rounded-full border border-white/10 shadow-lg"
                >
                    <nav className="flex justify-between items-center text-white p-2">
                        {/* Hamburger for mobile */}
                        <button
                            className="md:hidden z-20 p-4"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white my-1 rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>

                        {/* Nav links for desktop */}
                        <ul className="hidden md:flex items-center space-x-6 mx-auto">
                            <li><a href="#home" className="text-lg hover:text-amber-500 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-lg hover:text-amber-500 transition-colors">About</a></li>
                            <li><a href="#projects" className="text-lg hover:text-amber-500 transition-colors">Projects</a></li>
                            <li><a href="#skills" className="text-lg hover:text-amber-500 transition-colors">Skills</a></li>
                            <li><a href="#contact" className="text-lg hover:text-amber-500 transition-colors">Contact</a></li>
                        </ul>


                        {/* Social Icons and Hire Me Button */}
                        <div className='hidden md:flex items-center space-x-4 pr-4'>
                            <a href="https://github.com/Ajaikumar0712" aria-label="GitHub Profile">
                                <FiGithub className='w-5 h-5 hover:text-amber-500 transition-colors' />
                            </a>
                            <a href="https://www.linkedin.com/in/ajaikumar2606/" aria-label="LinkedIn Profile">
                                <FaLinkedin className='w-5 h-5 hover:text-amber-500 transition-colors' />
                            </a>
                            <a href="#contact" className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-600 hover:scale-105 transition-all duration-300 text-sm font-semibold">
                                HIRE ME
                            </a>
                        </div>
                    </nav>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black/90 z-40 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setOpen(false)}>
                <ul className="flex flex-col justify-center items-center h-full space-y-8">
                    <li><a href="#home" onClick={handleLinkClick} className="text-2xl text-white font-semibold">Home</a></li>
                    <li><a href="#about" onClick={handleLinkClick} className="text-2xl text-white font-semibold">About</a></li>
                    <li><a href="#projects" onClick={handleLinkClick} className="text-2xl text-white font-semibold">Projects</a></li>
                    <li><a href="#skills" onClick={handleLinkClick} className="text-2xl text-white font-semibold">Skills</a></li>
                    <li><a href="#contact" onClick={handleLinkClick} className="text-2xl text-white font-semibold">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
