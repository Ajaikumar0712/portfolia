import React, { useState } from 'react'
import LightRays from './lib/LightRays';
import Header from './Header';
import TextType from './lib/TextType';
import { motion } from 'framer-motion';

const Mode = () => {
  return (
    <>
      <Header />
      <div 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }} 
        className="bg-black"
      >
        <LightRays
          raysOrigin="center"
          raysColor="#fbbf24"
          raysSpeed={1}
          lightSpread={2}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.05}
          distortion={0.1}
          className="custom-rays absolute inset-0 z-0 opacity-40"
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          {/* Centered Photo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Ajaikumar E"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl text-amber-400 font-medium mb-2 tracking-wider">HELLO, I'M</h2>
            <div className="h-16 md:h-24 flex items-center justify-center">
              <TextType
                text={["AJAIKUMAR E", "SOFTWARE ENGINEER", "FULL STACK DEV"]}
                as="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
                typingSpeed={100}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
              />
            </div>
            <p className="text-gray-400 max-w-xl mx-auto mt-4 text-lg leading-relaxed">
              Aspiring Software Engineer with expertise in MERN stack, IoT, and Machine Learning.
              Building scalable, human-centered tech solutions.
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex gap-4 justify-center flex-wrap"
            >
              <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300">
                View Work
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Mode;