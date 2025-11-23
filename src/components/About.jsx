import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-dark p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-4 text-amber-400 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Who I Am
                </h3>
                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  <p>
                    I am a motivated and detail-oriented <span className="text-amber-400 font-semibold">Aspiring Software Engineer</span> with hands-on experience in full-stack web development, IoT-enabled systems, and real-time offline communication platforms.
                  </p>
                  <p>
                    Currently pursuing <span className="text-amber-400 font-semibold">B.Tech in Information Technology</span> at Prathyusha Engineering College (2022-2026) with a <span className="text-amber-400 font-semibold">CGPA of 7.9</span>.
                  </p>
                  <p>
                    I have a growing foundation in Machine Learning and am committed to building scalable, human-centered tech solutions that make a difference.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)" }}
                  className="glass-dark p-6 rounded-xl border border-gray-700/50 text-center"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">7.9</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)" }}
                  className="glass-dark p-6 rounded-xl border border-gray-700/50 text-center"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-2">2026</div>
                  <div className="text-sm text-gray-400">Graduation</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative glass-dark p-6 rounded-3xl border border-gray-700/50 overflow-hidden">
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/img/ajai.png"
                    alt="Ajaikumar E - Software Engineer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute bottom-10 left-10 right-10 glass p-4 rounded-xl border border-amber-500/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Building the Future</div>
                      <div className="text-xs text-gray-400">One line of code at a time</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
