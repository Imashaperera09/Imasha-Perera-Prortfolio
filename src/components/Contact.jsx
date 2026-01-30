import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-900 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.name.value;
                            const email = e.target.email.value;
                            const message = e.target.message.value;
                            const mailto = `mailto:imashaperera09@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                            window.location.href = mailto;
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 text-sm bg-slate-800 border border-transparent rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition-all text-white shadow-md shadow-blue-900/10"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 text-sm bg-slate-800 border border-transparent rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition-all text-white shadow-md shadow-blue-900/10 placeholder:text-slate-400"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-3 py-2 text-sm bg-slate-800 border border-transparent rounded-lg focus:border-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition-all text-white resize-none shadow-md shadow-blue-900/10"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full font-medium transition-all flex items-center gap-2 mx-auto shadow-lg shadow-blue-900/20"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
