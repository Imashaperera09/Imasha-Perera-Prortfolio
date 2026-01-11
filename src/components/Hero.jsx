import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-blue-500 font-semibold text-lg mb-4 tracking-wide">
                        HELLO THERE
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Imasha Perera</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        A passionate Software Engineering Undergraduate crafting modern and scalable web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-3 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-500 rounded-full font-medium transition-all flex items-center gap-2"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
