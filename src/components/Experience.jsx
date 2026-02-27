import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Machine Learning Intern',
        company: 'LearnNex',
        period: 'Jul 2025 – Sep 2025',
        type: 'Internship',
        description: [
            'Built end-to-end ML pipelines using Python, Pandas, NumPy and scikit-learn for real-world datasets',
            'Performed data preprocessing, feature engineering, and model evaluation on structured data',
            'Developed predictive models achieving 85% accuracy on held-out test datasets',
            'Collaborated with cross-functional teams to integrate ML models into product workflows',
            'Documented experiments and model performance metrics using Jupyter Notebook & Google Colab',
        ],
        tags: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Google Colab'],
    },
    {
        title: 'Next Gen Intern',
        company: 'EY GDS (Ernst & Young Global Delivery Services)',
        period: 'Feb 2025 – Mar 2025',
        type: 'Internship',
        description: [
            'Selected for a competitive internship program focused on enterprise-grade software development',
            'Worked on MERN stack-based project workflows following professional development standards',
            'Collaborated in structured project planning, orientation, and execution phases',
            'Applied best practices in full-stack development and collaborative software delivery',
        ],
        tags: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Agile'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
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
                        Experience
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Professional journey and hands-on industry experience
                    </p>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-500/50 via-orange-500/50 to-transparent"></div>

                        {/* Experience Cards */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-black shadow-lg shadow-amber-500/50"></div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(251, 191, 36, 0.3)" }}
                                        className="w-full md:w-5/12 glass-dark p-6 md:p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden group"
                                    >
                                        {/* Animated gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="p-3 bg-amber-500/10 rounded-lg">
                                                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                                    <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                        </svg>
                                                        {exp.company}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        {exp.period}
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
                                                    {exp.type}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <ul className="space-y-2 text-gray-300 mb-5">
                                                {exp.description.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                                                        viewport={{ once: true }}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <svg className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Tech Tags */}
                                            {exp.tags && (
                                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                                                    {exp.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2.5 py-1 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-400 mb-4">Want to work together?</p>
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-900/50"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
