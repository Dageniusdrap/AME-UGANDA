'use client';

import React from 'react';
import { Users, Award, Target, ShieldCheck, ChevronRight } from 'lucide-react';

export default function AboutPage() {
    const leadership = [
        {
            name: 'Eng. John Doe',
            role: 'President',
            bio: 'Licensed AME with over 20 years of experience in heavy maintenance and fleet management. Championing aviation safety standards across East Africa.',
            initials: 'JD'
        },
        {
            name: 'Eng. Jane Smith',
            role: 'Vice President',
            bio: 'Avionics specialist and certified training instructor. Passionate about mentoring the next generation of engineers.',
            initials: 'JS'
        },
        {
            name: 'Eng. Michael Okello',
            role: 'Secretary General',
            bio: 'Dedicated to regulatory compliance and aviation safety advocacy. Expert in aviation law and policy.',
            initials: 'MO'
        },
        {
            name: 'Eng. Sarah Alupo',
            role: 'Treasurer',
            bio: 'Experienced in MRO financial management and resource planning. Ensuring sustainable growth for the association.',
            initials: 'SA'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-aviation-950 to-slate-900"></div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
                        <Users className="w-4 h-4" />
                        <span>Our Legacy</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-aviation-200 to-slate-400">AEU</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                        The definitive professional body uniting Aircraft Maintenance, Aeronautical, and Aerospace Engineers in Uganda. We are the guardians of safety and the architects of the future.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-xl p-10 border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-aviation-50 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-aviation-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To promote the highest standards of safety, professionalism, and recognition for Aircraft Maintenance, Aeronautical, and Aerospace Engineers in Uganda through advocacy, education, and collaboration with regulatory bodies.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-10 border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To be the leading authority and voice for the aviation maintenance profession in Uganda, and a globally recognized standard for excellence, ensuring a safe, sustainable, and thriving aviation industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">The principles that guide our every action and decision.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Safety First', desc: 'Uncompromising commitment to aviation safety standards.', icon: ShieldCheck, color: 'text-aviation-600', bg: 'bg-aviation-50' },
                            { title: 'Excellence', desc: 'Pursuing the highest level of technical proficiency and skill.', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
                            { title: 'Integrity', desc: 'Upholding strict ethical standards in all professional conduct.', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' }
                        ].map((value, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
                                <div className={`w-14 h-14 ${value.bg} rounded-full flex items-center justify-center mb-4`}>
                                    <value.icon className={`w-7 h-7 ${value.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
                        <p className="text-lg text-slate-600">Meet the dedicated professionals serving our members.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.map((leader, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-100 hover:shadow-xl hover:border-aviation-200 transition-all duration-300 group">
                                <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="text-2xl font-bold text-slate-400">{leader.initials}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{leader.name}</h3>
                                <div className="inline-block bg-aviation-50 text-aviation-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                    {leader.role}
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
