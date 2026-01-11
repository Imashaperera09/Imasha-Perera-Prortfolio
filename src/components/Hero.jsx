import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-slate-300 text-sm font-medium">Available for work</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        I design and build <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                            intelligent solutions
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Blending creativity, engineering, and modern technologies to transform complex challenges into thoughtful, scalable digital experiences.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mb-16">
                        <a href="#" className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-blue-700 transition-all hover:-translate-y-1">
                            <Github size={24} />
                        </a>
                        <a href="#" className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-blue-700 transition-all hover:-translate-y-1">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:contact@example.com" className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-blue-700 transition-all hover:-translate-y-1">
                            <Mail size={24} />
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-slate-500"
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
