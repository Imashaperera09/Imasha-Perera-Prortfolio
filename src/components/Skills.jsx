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
    { name: 'Git', icon: <Code size={24} /> },
    { name: 'MySQL', icon: <Database size={24} /> },
    { name: 'Redux', icon: <Code size={24} /> },
    { name: 'Figma', icon: <Globe size={24} /> },
    { name: 'Canva', icon: <Globe size={24} /> },
    { name: 'Jira', icon: <Server size={24} /> },
    
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
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-900 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 p-1 md:p-2 rounded-md border border-slate-800 group flex flex-col items-center justify-center gap-1 transition-all hover:-translate-y-1 outline outline-1 outline-blue-600/40 hover:outline-blue-500 w-32 h-20 md:w-36 md:h-24 xl:w-40 xl:h-28"
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
