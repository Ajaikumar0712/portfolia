import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Recipe Sharing Platform',
        description: 'Built a full-stack web application using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented user authentication, secure login/signup, and enabled CRUD operations for user-generated recipes. Created a responsive and intuitive UI for easy browsing and sharing.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Auth'],
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        link: '#',
    },
    {
        id: 2,
        title: 'RAG for Document Q&A',
        description: 'Built an AI-powered document Q&A system using RAG architecture. Processed and chunked PDF documents to generate embeddings stored in a FAISS index. Developed an interactive Streamlit web app enabling real-time question answering using Gemini/OpenAI models.',
        tags: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Gemini API'],
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        link: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
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
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={project.link}
                                        className="px-6 py-2 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
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
