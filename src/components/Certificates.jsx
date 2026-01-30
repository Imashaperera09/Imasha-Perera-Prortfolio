import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Maximize2 } from 'lucide-react';

import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';

const certificates = [
    {
        title: 'Comprehensive Master Java Developer (CMJD)',
        issuer: 'IJSE-Institute of Software Engineering',
        image: c1,
        description: 'Certified Java Developer through the Institute of Software Engineering. This certification validates expertise in advanced Java SE, covering everything from core syntax to professional-grade software architecture.'
    },
    {
        title: 'Certificate in Python for Beginners',
        issuer: 'University of Moratuwa',
        image: c2,
        description: 'Completed a comprehensive online learning programme in Python programming offered by the Centre for Open & Distance Learning (CODL). This course provided a solid foundation in Python syntax, logic, and fundamental programming concepts.'
    }
];

const Certificates = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="certificates" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Licenses & Certifications</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all shadow-xl"
                        >
                            <div
                                className="relative h-[240px] md:h-[300px] bg-slate-950/80 flex items-center justify-center p-4 cursor-zoom-in group/img"
                                onClick={() => setSelectedImg(cert.image)}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
                                        <Maximize2 className="text-white" size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <div className="absolute -top-10 right-6 p-3 bg-purple-600 rounded-xl shadow-lg shadow-purple-600/40">
                                    <Award className="text-white" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                                <p className="text-slate-400 text-xs mb-4 leading-relaxed line-clamp-3">
                                    {cert.description}
                                </p>
                                <div className="flex justify-between items-center pt-2 border-t border-slate-700/50">
                                    <p className="text-purple-400 text-xs font-medium uppercase tracking-wider">{cert.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
                            onClick={() => setSelectedImg(null)}
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImg}
                            alt="Certificate Full View"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
