import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
    const [focusedField, setFocusedField] = useState(null);

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent"
                >
                    Get In Touch
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently open to new opportunities and collaborations.
                            Feel free to reach out to me via email or phone.
                        </p>

                        <div className="space-y-6">
                            {/* Email */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="p-3 bg-amber-500/10 rounded-lg text-amber-500 group-hover:bg-amber-500/20 transition-all"
                                >
                                    <FiMail className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-200">Email</h4>
                                    <a href="mailto:kumarajai914@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                                        kumarajai914@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="p-3 bg-amber-500/10 rounded-lg text-amber-500 group-hover:bg-amber-500/20 transition-all"
                                >
                                    <FiPhone className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-200">Phone</h4>
                                    <a href="tel:+916380596859" className="text-gray-400 hover:text-amber-400 transition-colors">
                                        +91 6380596859
                                    </a>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="p-3 bg-amber-500/10 rounded-lg text-amber-500 group-hover:bg-amber-500/20 transition-all"
                                >
                                    <FiMapPin className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-200">Location</h4>
                                    <p className="text-gray-400">India</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 glass-dark p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        whileFocus={{ scale: 1.01 }}
                                        className={`w-full px-4 py-3 bg-gray-900/50 border ${focusedField === 'name' ? 'border-amber-500 shadow-lg shadow-amber-500/20' : 'border-gray-700'
                                            } rounded-lg focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-white`}
                                        placeholder="Your Name"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        whileFocus={{ scale: 1.01 }}
                                        className={`w-full px-4 py-3 bg-gray-900/50 border ${focusedField === 'email' ? 'border-amber-500 shadow-lg shadow-amber-500/20' : 'border-gray-700'
                                            } rounded-lg focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-white`}
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <motion.input
                                    type="text"
                                    id="subject"
                                    onFocus={() => setFocusedField('subject')}
                                    onBlur={() => setFocusedField(null)}
                                    whileFocus={{ scale: 1.01 }}
                                    className={`w-full px-4 py-3 bg-gray-900/50 border ${focusedField === 'subject' ? 'border-amber-500 shadow-lg shadow-amber-500/20' : 'border-gray-700'
                                        } rounded-lg focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-white`}
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <motion.textarea
                                    id="message"
                                    rows="5"
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    whileFocus={{ scale: 1.01 }}
                                    className={`w-full px-4 py-3 bg-gray-900/50 border ${focusedField === 'message' ? 'border-amber-500 shadow-lg shadow-amber-500/20' : 'border-gray-700'
                                        } rounded-lg focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all text-white resize-none`}
                                    placeholder="Tell me about your project..."
                                ></motion.textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-amber-900/30 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Send Message</span>
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
