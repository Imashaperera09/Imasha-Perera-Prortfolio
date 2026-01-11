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
                    <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative group w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center">
                                {/* Replace src with your actual image */}
                                <div className="text-slate-500 text-center p-4">
                                    <p className="text-sm">Add your image here</p>
                                    <p className="text-xs mt-2 opacity-50">(320x320px recommended)</p>
                                </div>
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
                                <h3 className="text-blue-700 font-semibold mb-1">Education</h3>
                                <p className="text-sm">BSc in Software Engineering</p>
                                <p className="text-xs text-slate-500">CINEC Campus, 2023-2027</p>
                            </div>
                            <div>
                                <h3 className="text-blue-700 font-semibold mb-1">Experience</h3>
                                <p className="text-sm">Freelance Developer</p>
                                <p className="text-xs text-slate-500">2024 - Present</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
