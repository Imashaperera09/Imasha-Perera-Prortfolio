import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-white">Imasha Perera</span>
                    <p className="text-slate-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/Imashaperera09" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/imasha-perera-14353727b" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:imashaperera09@gmail.com" className="text-slate-400 hover:text-blue-700 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
