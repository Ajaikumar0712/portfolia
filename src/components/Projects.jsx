import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Recipe Sharing Platform',
        description: 'Built a full-stack web application using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented user authentication, secure login/signup, and enabled CRUD operations for user-generated recipes. Created a responsive and intuitive UI for easy browsing and sharing.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Auth'],
        image: '/img/recp.avif',
        link: 'https://github.com/Ajaikumar0712/recipe-sharing-platform',
    },
    {
        id: 2,
        title: 'RAG for Document Q&A',
        description: 'Built an AI-powered document Q&A system using RAG architecture. Processed and chunked PDF documents to generate embeddings stored in a FAISS index. Developed an interactive Streamlit web app enabling real-time question answering using Gemini/OpenAI models.',
        tags: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Gemini API'],
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        link: 'https://github.com/Ajaikumar0712/RAG',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            {/* Card glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                            <div className="relative glass-dark rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-amber-500/50 transition-all duration-300 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                                    {/* View Project Button Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
                                    >
                                        <motion.a
                                            href={project.link}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-colors shadow-lg shadow-amber-900/50"
                                        >
                                            View Project
                                        </motion.a>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.5 + (tagIndex * 0.05) }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "rgba(251, 191, 36, 0.2)",
                                                    borderColor: "rgba(251, 191, 36, 0.5)"
                                                }}
                                                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 transition-all cursor-default"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
