import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cloud, Globe, Layout, Server, Smartphone, FileCode } from 'lucide-react';

const skills = [
    { name: 'TypeScript', icon: <Code size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'Python', icon: <Terminal size={24} /> },
    { name: 'JavaScript', icon: <Code size={24} /> },
    { name: 'HTML', icon: <FileCode size={24} /> },
    { name: 'CSS', icon: <Layout size={24} /> },
    { name: 'Next.js', icon: <Globe size={24} /> },
    { name: 'TailwindCSS', icon: <Layout size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'Firebase', icon: <Cloud size={24} /> },
    { name: 'Supabase', icon: <Database size={24} /> },
    { name: 'Flutter', icon: <Smartphone size={24} /> },
    { name: 'React Native', icon: <Smartphone size={24} /> },
    { name: 'AWS', icon: <Cloud size={24} /> },
    { name: 'Java', icon: <Code size={24} /> },
    { name: 'C++', icon: <Code size={24} /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
                    <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-blue-700 transition-all group flex flex-col items-center justify-center gap-3 hover:-translate-y-1"
                        >
                            <div className="p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-blue-500 transition-colors">
                                {React.cloneElement(skill.icon, { size: 20 })}
                            </div>
                            <h3 className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
