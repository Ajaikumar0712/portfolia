
import React from 'react'
import LightRays from './lib/LightRays';
import Header from './Header';
import TextType from './lib/TextType';
import { motion } from 'framer-motion';

const Mode = () => {
  return (
    <>
      <Header />
      <div
        id="home"
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

        {/* Decorative Orbs - static for performance */}
        <div className="absolute top-20 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 md:right-20 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          {/* Glassmorphic Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-dark rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl overflow-hidden"
          >
            {/* Centered Photo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8 group mx-auto w-fit"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt animate-pulse-slow"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                <img
                  src="/img/ajai.png"
                  alt="Ajaikumar E"
                  loading="lazy"
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
              <h2 className="text-xl md:text-2xl text-amber-400 font-medium mb-2 tracking-wider animate-shimmer">HELLO, I'M</h2>
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
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-900/50"
                >
                  View Work
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-3 glass border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          
          
        </div>
      </div>
    </>
  );
}

export default Mode;
