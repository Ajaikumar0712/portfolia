import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Ajaikumar0712', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ajaikumar2606/', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black py-8 border-t border-gray-800/50 relative overflow-visible">
            {/* Subtle animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 opacity-50" />

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-4 md:mb-0"
                >
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">Ajaikumar E</span>. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        Built with React & Tailwind CSS
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex space-x-6"
                >
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 5,
                                    color: '#fbbf24'
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-amber-500 transition-colors relative group"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                                <Icon className="w-5 h-5 relative z-10" />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>

            {/* Scroll to top button */}
            <motion.a
                href="#home"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                    y: -5,
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)"
                }}
                className="absolute right-4 md:right-8 -top-6 bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-full shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all group z-20"
                aria-label="Scroll to top"
            >
                <svg className="w-5 h-5 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.a>
        </footer>
    );
};

export default Footer;
