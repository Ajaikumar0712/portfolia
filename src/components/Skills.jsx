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

const additionalSkills = ['Tailwind CSS', 'GSAP', 'N8N', 'Git', 'Linux', 'NLP', 'Figma'];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
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
                    className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
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
                        Technical Skills
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Proficient in modern technologies and frameworks to build scalable solutions
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Main Skills with Progress Bars */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-dark p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group"
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center gap-2">
                                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                                Core Technologies
                            </h3>
                            <div className="space-y-4 relative z-10">
                                {skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-amber-500 font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full relative"
                                                whileHover={{ boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)" }}
                                            >
                                                {/* Animated shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Additional Skills & Tools */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-dark p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center gap-2">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Tools & Frameworks
                            </h3>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {additionalSkills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "rgba(251, 191, 36, 0.2)",
                                            borderColor: "rgba(251, 191, 36, 0.5)"
                                        }}
                                        className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700 cursor-default transition-all"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Stats Grid */}
                            <div className="mt-8 grid grid-cols-3 gap-4 relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30"
                                >
                                    <div className="text-2xl font-bold text-amber-400 mb-1">6+</div>
                                    <div className="text-xs text-gray-400">Technologies</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30"
                                >
                                    <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
                                    <div className="text-xs text-gray-400">Projects</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30"
                                >
                                    <div className="text-2xl font-bold text-orange-400 mb-1">2+</div>
                                    <div className="text-xs text-gray-400">Years Exp</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
