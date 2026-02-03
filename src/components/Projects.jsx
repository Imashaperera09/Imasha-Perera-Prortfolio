// Portfolio Projects Component - Updated Feb 3, 2026 20:30 UTC
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

import solarnovaPreview from '../assets/solarnova_preview.png';
import techstrikePreview from '../assets/techstrike_preview.png';
import smartleavePreview from '../assets/smartleave_preview.png';
import cognitoHubPreview from '../assets/cognito_hub.png';

const projects = [
    {
        title: 'SolarNova',
        image: solarnovaPreview,
        description: 'A comprehensive solar energy monitoring platform providing real-time insights into home energy production, consumption, and system health with anomaly detection.',
        tags: ['React', 'Node.js', 'TypeScript', 'Express'],
        github: [
            { label: 'Frontend', url: 'https://github.com/Imashaperera09/fed-4-front-end' },
            { label: 'Backend', url: 'https://github.com/Imashaperera09/FED-4-BACK-END' },
            { label: 'Data API', url: 'https://github.com/Imashaperera09/Dataapi' }
        ],
        demo: 'https://fed-4-front-end.vercel.app/',
    },
    {
        title: 'Smart Leave - Permission Management System',
        image: smartleavePreview,
        description: 'A modern, efficient way to track, request, and approve leaves within an organization with real-time balance updates and role-based workflows.',
        tags: ['React', '.NET Core API', 'Supabase', 'PostgreSQL'],
        github: 'https://github.com/Imashaperera09/Smart_Permission_Management_System_',
        demo: 'https://smart-permission-management-system-8s9r8osb1.vercel.app/',
    },
    {
        title: 'Cognito Hub: Strategic Research Engine',
        image: cognitoHubPreview,
        description: 'Developed an autonomous multi-agent system using LangGraph to orchestrate specialized agents for deep-dive research, data synthesis, and automated analysis. Integrated Groq (Llama 3.3) and Tavily API to deliver high-speed, real-time web intelligence and future-proof strategic recommendations for any research topic.',
        tags: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Groq', 'Tavily API'],
        github: 'https://github.com/Imashaperera09/multi-agent',
        demo: 'https://multi-agent-dun.vercel.app/',
    },
    {
        title: 'Techstrike',
        image: techstrikePreview,
        description: 'The official website developed for the Computing Techstrike Club, serving as a central hub for club events, member resources, and tech community updates.',
        tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
        github: 'https://github.com/Pasindumi/Techstrike_WebSite.git',
        demo: 'https://techstrike.vercel.app/',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-900 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-700 transition-all hover:-translate-y-2"
                        >
                            <div className="h-48 bg-slate-800 relative group">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                        Project Image
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-800 text-blue-600 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 items-center">
                                    {Array.isArray(project.github) ? (
                                        <div className="relative group/code">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all text-sm">
                                                <Github size={18} /> Code
                                            </button>
                                            <div className="absolute bottom-full left-0 mb-2 w-40 bg-slate-900 border border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover/code:opacity-100 group-hover/code:visible transition-all z-10">
                                                {project.github.map((repo) => (
                                                    <a key={repo.label} href={repo.url} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-slate-800 first:rounded-t-lg last:rounded-b-lg">
                                                        {repo.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all text-sm">
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-blue-500 hover:text-blue-400 rounded-lg transition-all text-sm">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
