'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950"></div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="inline-flex items-center space-x-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
                        <Mail className="w-4 h-4" />
                        <span>We're Here to Help</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-200">Us</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Have questions about membership, certification, or advocacy? Our dedicated team is ready to assist you.
                    </p>
                </div>
            </section>

            <section className="py-20 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Contact Info Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-10 border border-slate-100 h-full">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-aviation-50 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-aviation-100 transition-colors">
                                        <MapPin className="w-6 h-6 text-aviation-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Our Office</h3>
                                        <p className="text-slate-600 leading-relaxed">Entebbe International Airport<br />Terminal Building, 2nd Floor<br />Kampala, Uganda</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-aviation-50 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-aviation-100 transition-colors">
                                        <Phone className="w-6 h-6 text-aviation-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                                        <p className="text-slate-600">+256 700 123 456</p>
                                        <p className="text-slate-500 text-sm mt-1">Available Mon-Fri, 9am-5pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-aviation-50 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-aviation-100 transition-colors">
                                        <Mail className="w-6 h-6 text-aviation-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-600">info@ameuganda.org</p>
                                        <p className="text-slate-600">support@ameuganda.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-10 border border-slate-100">
                            {formStatus === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-aviation-600 font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                                <input type="text" id="name" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none transition-shadow" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                                <input type="email" id="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none transition-shadow" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                            <select id="subject" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none transition-shadow">
                                                <option>General Inquiry</option>
                                                <option>Membership Support</option>
                                                <option>Press & Media</option>
                                                <option>Partnership</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                            <textarea id="message" rows={5} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none transition-shadow" placeholder="How can we help you?"></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'sending'}
                                            className="w-full bg-aviation-600 text-white py-4 rounded-xl font-bold hover:bg-aviation-700 transition flex items-center justify-center gap-2 shadow-lg shadow-aviation-600/20"
                                        >
                                            {formStatus === 'sending' ? (
                                                'Sending...'
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" /> Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
