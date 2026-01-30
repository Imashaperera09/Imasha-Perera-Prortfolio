import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex items-center justify-between shadow-lg w-full max-w-3xl"
            >
                <div className="flex-shrink-0 mr-8">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                        Imasha.
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block ml-4">
                    {/* Placeholder for potential CTA or just spacing */}
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none p-2"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-4 right-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl md:hidden"
                >
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl text-base font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
