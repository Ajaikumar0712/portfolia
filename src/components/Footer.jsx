import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <FiGithub className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <FiTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <FiInstagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
