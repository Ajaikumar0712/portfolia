import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 88 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Machine Learning', level: 70 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a motivated and detail-oriented Aspiring Software Engineer with hands-on experience in full-stack web development, IoT-enabled systems, and real-time offline communication platforms.
              </p>
              <p>
                Currently pursuing B.Tech in Information Technology at Prathyusha Engineering College (2022-2026) with a CGPA of 7.9. I have a growing foundation in Machine Learning and am committed to building scalable, human-centered tech solutions.
              </p>
              <div className="pt-4">
                <h4 className="text-amber-400 font-semibold mb-2">Experience</h4>
                <p className="font-medium text-white">Machine Learning Intern — LearnNex</p>
                <p className="text-sm text-gray-500">Jul 2025 - Sep 2025</p>
                <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
                  <li>Built ML projects using Python, Pandas, NumPy and scikit-learn.</li>
                  <li>Gained hands-on experience in data preprocessing and model creation.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-amber-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Tailwind CSS', 'GSAP', 'N8N', 'Git', 'Linux', 'NLP', 'Figma'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
