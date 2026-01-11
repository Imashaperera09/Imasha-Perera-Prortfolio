import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-blue-500 group"
                        >
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                            <p className="text-slate-400 text-sm mt-2">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
