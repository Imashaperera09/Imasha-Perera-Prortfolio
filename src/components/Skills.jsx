import React from 'react';
import { motion } from 'framer-motion';
import {
    Code, Terminal, Database, Cloud, Globe, Layout, Server,
    Smartphone, FileCode, GitBranch, Figma, Cpu, Layers,
    MessageSquare, Users, Zap, Briefcase, Lightbulb, Clock,
    Lock, Shield, Box, Share2, ClipboardList
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: <Code size={16} /> },
            { name: 'HTML', icon: <FileCode size={16} /> },
            { name: 'CSS', icon: <Layout size={16} /> },
            { name: 'JavaScript', icon: <Terminal size={16} /> },
            { name: 'Python', icon: <Terminal size={16} /> },
            { name: 'PHP', icon: <FileCode size={16} /> },
            { name: 'C++', icon: <Code size={16} /> },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React.js', icon: <Zap size={16} /> },
            { name: 'React Native', icon: <Smartphone size={16} /> },
            { name: 'Next.js', icon: <Globe size={16} /> },
            { name: 'Node.js', icon: <Server size={16} /> },
            { name: 'Express.js', icon: <Server size={16} /> },
            { name: 'Spring Boot', icon: <Layers size={16} /> },
            { name: 'Flutter', icon: <Smartphone size={16} /> },
            { name: '.NET', icon: <Cpu size={16} /> },
            { name: 'Tailwind CSS', icon: <Layers size={16} /> },

        ]
    },
    {
        title: 'Databases & Cloud',
        skills: [
            { name: 'MySQL', icon: <Database size={16} /> },
            { name: 'MongoDB', icon: <Database size={16} /> },
            { name: 'Supabase', icon: <Database size={16} /> },
            { name: 'Firebase', icon: <Cloud size={16} /> },
            { name: 'AWS', icon: <Cloud size={16} /> },
            { name: 'Render', icon: <Globe size={16} /> },
            { name: 'Vercel', icon: <Cloud size={16} /> },
        ]
    },
    {
        title: 'Tools & Version Control',
        skills: [
            { name: 'Git', icon: <GitBranch size={16} /> },
            { name: 'GitHub', icon: <GitBranch size={16} /> },
            { name: 'Figma', icon: <Figma size={16} /> },
            { name: 'VS Code', icon: <Code size={16} /> },
            { name: 'Jira', icon: <Briefcase size={16} /> },
        ]
    },
    {
        title: 'Development Concepts',
        skills: [
            { name: 'RESTful APIs', icon: <Share2 size={16} /> },
            { name: 'MVC Architecture', icon: <Layers size={16} /> },
            { name: 'CRUD Operations', icon: <Database size={16} /> },
            { name: 'OOP', icon: <Box size={16} /> },
            { name: 'Full-Stack Dev', icon: <Cpu size={16} /> },
            { name: 'Responsive Design', icon: <Smartphone size={16} /> },
        ]
    },
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Problem Solving', icon: <Lightbulb size={16} /> },
            { name: 'Team Collaboration', icon: <Users size={16} /> },
            { name: 'Communication', icon: <MessageSquare size={16} /> },
            { name: 'Time Management', icon: <Clock size={16} /> },
            { name: 'Adaptability', icon: <Zap size={16} /> },
            { name: 'Project Management', icon: <Briefcase size={16} /> },
        ]
    }
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and professional abilities
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-black/20 group h-full"
                        >
                            <h3 className="text-lg font-bold text-blue-400 mb-6 group-hover:text-purple-400 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all cursor-default group/skill"
                                    >
                                        <span className="text-blue-400 group-hover/skill:text-purple-400 transition-colors">
                                            {skill.icon}
                                        </span>
                                        <span className="text-xs text-slate-300 group-hover/skill:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

