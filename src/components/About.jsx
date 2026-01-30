import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target, Code2, Award, Sparkles } from 'lucide-react';

const About = () => {
    const infoCards = [
        {
            icon: <GraduationCap className="text-blue-500" size={24} />,
            title: "Education",
            subtitle: "BSc Software Engineering",
            desc: "CINEC Campus (2023 - 2027)"
        },
        {
            icon: <Target className="text-purple-500" size={24} />,
            title: "Expertise & Vision",
            subtitle: "Software Engineering & AI",
            desc: "Building scalable, clean-code systems and user-centric AI to solve real-world problems."
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex justify-center lg:justify-start"
                    >
                        <div className="relative group flex justify-center">
                            {/* Decorative frames */}
                            <div className="absolute -inset-4 border border-slate-800 rounded-3xl -rotate-6 z-0 group-hover:rotate-0 transition-transform duration-500"></div>
                            <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl rotate-6 z-0 group-hover:rotate-0 transition-transform duration-500"></div>

                            <div className="relative z-10 w-72 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl">
                                <img
                                    src="/src/assets/ima.jpeg"
                                    alt="Imasha"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Passionate <span className="text-blue-500">Software Engineer</span> based in Sri Lanka
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    As a Software Engineering undergraduate, I blend technical precision with creative problem-solving. My journey is driven by a deep curiosity for how things work and a commitment to building applications that make a difference.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {infoCards.map((card, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        className="p-5 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all group"
                                    >
                                        <div className="mb-4 p-3 bg-slate-800 w-fit rounded-xl group-hover:scale-110 transition-transform">
                                            {card.icon}
                                        </div>
                                        <h4 className="text-white font-bold mb-1">{card.title}</h4>
                                        <p className="text-blue-400 text-sm font-medium mb-1">{card.subtitle}</p>
                                        <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                                    </motion.div>
                                ))}
                            </div>


                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
