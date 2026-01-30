import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="text-blue-500" size={24} />,
            title: "Email",
            value: "imashaperera09@gmail.com",
            link: "mailto:imashaperera09@gmail.com"
        },
        {
            icon: <MapPin className="text-purple-500" size={24} />,
            title: "Location",
            value: "Sri Lanka",
            link: null
        }
    ];

    const socials = [
        { icon: <Github size={20} />, link: "https://github.com/Imashaperera09", label: "GitHub" },
        { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/imasha-perera-14353727b", label: "LinkedIn" }
    ];

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 xl:col-span-5 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl group hover:border-blue-500/30 transition-all"
                                >
                                    <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{info.title}</p>
                                        {info.link ? (
                                            <a href={info.link} className="text-white font-medium hover:text-blue-400 transition-colors">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <form
                            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-2xl"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = e.target.name.value;
                                const email = e.target.email.value;
                                const message = e.target.message.value;
                                const mailto = `mailto:imashaperera09@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                                window.location.href = mailto;
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Name</label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 mb-8">
                                <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
