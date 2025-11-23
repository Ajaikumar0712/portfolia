import React from 'react';
import { motion } from 'framer-motion';

const education = [
    {
        degree: 'B.Tech in Information Technology',
        institution: 'Prathyusha Engineering College',
        location: 'Chennai, Tamil Nadu',
        period: '2022 - 2026',
        cgpa: '7.9',
        highlights: [
            'Specialization in Web Development and Machine Learning',
            'Completed multiple real-world projects',
        ],
        icon: 'university'
    },
    {
        degree: 'Higher Secondary (XII)',
        institution: 'St.Pauls Higher Secondary School',
        location: 'Neyveli, Tamil Nadu',
        period: '2020 - 2022',
        percentage: '79%',
        highlights: [
            'Top performer in Mathematics'
        ],
        icon: 'school'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
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
                    className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
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
                        Education
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Academic background and continuous learning journey
                    </p>

                    {/* Education Cards */}
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(251, 191, 36, 0.3)" }}
                                className="glass-dark p-6 md:p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden group"
                            >
                                {/* Animated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-500/30">
                                                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2 text-amber-400 font-semibold">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                            </svg>
                                                            {edu.institution}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {edu.location}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-start md:items-end gap-2">
                                                    <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-1.5 rounded-lg">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        {edu.period}
                                                    </div>
                                                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-4 py-2 rounded-lg">
                                                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <div className="mt-4">
                                                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Highlights</h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {edu.highlights.map((highlight, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                                                            viewport={{ once: true }}
                                                            className="flex items-start gap-2 text-gray-300"
                                                        >
                                                            <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-sm">{highlight}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications Teaser */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 glass-dark p-6 rounded-2xl border border-gray-700/50 text-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
                        <p className="text-gray-400 mb-4">Always expanding my knowledge through courses, certifications, and hands-on projects</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Web Development', 'Machine Learning', 'Cloud Computing', 'Data Structures'].map((cert, i) => (
                                <span key={i} className="px-4 py-2 bg-amber-500/10 text-amber-400 text-sm font-semibold rounded-full border border-amber-500/30">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
