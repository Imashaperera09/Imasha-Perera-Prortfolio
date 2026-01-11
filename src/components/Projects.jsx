import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of the project and the technologies used. Highlights key features and challenges solved.',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Project Two',
        description: 'Another amazing project showcasing frontend skills and design capabilities.',
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Project Three',
        description: 'A full-stack application with authentication and real-time features.',
        tags: ['Next.js', 'PostgreSQL', 'Prisma'],
        github: '#',
        demo: '#',
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
                    <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full"></div>
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
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                    Project Image
                                </div>
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

                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all text-sm">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-blue-500 hover:text-blue-400 rounded-lg transition-all text-sm">
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
