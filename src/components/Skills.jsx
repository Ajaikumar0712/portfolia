import React, { memo } from 'react';
import { motion } from 'framer-motion';

// ── Data pulled directly from resume ──────────────────────────────
const coreSkills = [
    { name: 'Python',       level: 90 },
    { name: 'JavaScript',   level: 85 },
    { name: 'React.js',     level: 88 },
    { name: 'Node.js',      level: 80 },
    { name: 'MongoDB',      level: 75 },
    { name: 'FastAPI',      level: 62 },
    { name: 'RAG / LLMs',   level: 72 },
    { name: 'scikit-learn', level: 75 },
];

const toolGroups = [
    {
        label: 'Web & Backend',
        items: ['HTML', 'CSS', 'Express.js', 'SQL', 'Tailwind CSS'],
    },
    {
        label: 'AI / Data',
        items: ['FAISS', 'SentenceTransformers', 'OpenCV', 'NLP', 'Pandas', 'NumPy', 'Hugging Face Hub'],
    },
    {
        label: 'DevTools',
        items: ['Git / GitHub', 'Docker', 'N8N', 'Streamlit', 'Jupyter Notebook', 'Google Colab', 'Linux'],
    },
    {
        label: 'Core CS & Design',
        items: ['DBMS', 'Computer Networks', 'Operating Systems', 'Figma', 'Wireframing'],
    },
];

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Skills = () => (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Static decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-16 right-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-16 left-16 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">

            {/* ── Section Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <span className="inline-block text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase mb-3">
                    What I Work With
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                    Technical Skills
                </h2>
                <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
                    Full-stack engineer with hands-on experience in web development,
                    AI/ML systems, and cloud-ready tooling.
                </p>
                <div className="mt-5 h-px w-16 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
            </motion.div>

            {/* ── Core Skills ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-2xl border border-gray-700/50 mb-5"
            >
                <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    Core Proficiencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                    {coreSkills.map((sk, i) => (
                        <div key={sk.name}>
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-gray-300 text-sm font-medium">{sk.name}</span>
                                <span className="text-amber-500 text-xs font-semibold">{sk.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${sk.level}%` }}
                                    transition={{ duration: 0.9, delay: 0.08 * i, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ── Tool Groups ── */}
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                {toolGroups.map((group) => (
                    <motion.div
                        key={group.label}
                        variants={fadeUp}
                        className="glass-dark rounded-2xl border border-gray-700/50 p-5"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                                {group.label}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <motion.span
                                    key={item}
                                    whileHover={{ scale: 1.06, borderColor: 'rgba(251,191,36,0.5)', color: '#fbbf24' }}
                                    className="px-3 py-1 text-xs text-gray-400 border border-gray-700/60 rounded-full bg-gray-800/50 cursor-default transition-colors duration-150"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    </section>
);

export default memo(Skills);
