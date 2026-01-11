import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 relative group">
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                                Profile Image Placeholder
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-300 space-y-6"
                    >
                        <p className="text-lg leading-relaxed">
                            I am a dedicated Software Engineering Undergraduate with a strong passion for building innovative web solutions.
                            My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
                        </p>
                        <p className="text-lg leading-relaxed">
                            I specialize in full-stack development, with expertise in React, Node.js, and modern CSS frameworks like Tailwind.
                            I am always eager to learn new technologies and improve my skills.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div>
                                <h3 className="text-blue-500 font-semibold mb-1">Education</h3>
                                <p className="text-sm">BSc in Software Engineering</p>
                                <p className="text-xs text-slate-500">University Name, 2022-2026</p>
                            </div>
                            <div>
                                <h3 className="text-blue-500 font-semibold mb-1">Experience</h3>
                                <p className="text-sm">Freelance Developer</p>
                                <p className="text-xs text-slate-500">2023 - Present</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
