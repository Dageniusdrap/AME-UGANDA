'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    MapPin,
    Award,
    Briefcase,
    Mail,
    Phone,
    Linkedin,
    CheckCircle,
    ArrowLeft,
    MessageSquare,
    UserPlus,
    X,
    Send
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { members } from '@/lib/mock-data';

export default function MemberProfilePage() {
    const params = useParams();
    const { id } = params;
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [connectStatus, setConnectStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    // Find member from centralized data store
    const member = members.find(m => m.id === Number(id));

    if (!member) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserPlus className="w-8 h-8 text-slate-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Member Not Found</h2>
                    <p className="text-slate-600 mb-6">The member profile you are looking for does not exist or has been removed.</p>
                    <Link href="/member-directory" className="bg-aviation-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-aviation-700 transition block w-full">
                        Back to Directory
                    </Link>
                </div>
            </div>
        );
    }

    const handleConnect = () => {
        setConnectStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setConnectStatus('sent');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative">

            {/* Breadcrumb / Back */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link href="/member-directory" className="inline-flex items-center text-slate-500 hover:text-aviation-600 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Directory
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">

                    {/* Header Banner */}
                    <div className="h-48 bg-gradient-to-r from-aviation-800 to-aviation-600 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>

                    <div className="px-8 pb-8">
                        <div className="relative flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6">
                            {/* Avatar */}
                            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center text-6xl border-4 border-white mr-6 z-10 shrink-0">
                                {member.avatar}
                            </div>

                            {/* Quick Info */}
                            <div className="flex-1 mt-4 md:mt-0 md:mb-2 w-full">
                                <div className="flex flex-wrap items-center gap-3 mb-1">
                                    <h1 className="text-3xl font-bold text-slate-900">{member.name}</h1>
                                    {member.verified && (
                                        <span className="bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" /> Verified Member
                                        </span>
                                    )}
                                </div>
                                <p className="text-slate-600 font-medium text-lg">{member.title}</p>
                                <div className="flex items-center text-slate-500 text-sm mt-1">
                                    <MapPin className="w-3 h-3 mr-1" /> {member.location}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 mt-6 md:mt-0 w-full md:w-auto">
                                <button
                                    onClick={() => setIsMessageModalOpen(true)}
                                    className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <MessageSquare className="w-4 h-4" /> Message
                                </button>
                                <button
                                    onClick={handleConnect}
                                    disabled={connectStatus !== 'idle'}
                                    className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-aviation-600/20 text-white
                                        ${connectStatus === 'sent' ? 'bg-green-600 hover:bg-green-700' : 'bg-aviation-600 hover:bg-aviation-700'}
                                        ${connectStatus === 'sending' ? 'opacity-70 cursor-wait' : ''}
                                    `}
                                >
                                    {connectStatus === 'idle' && <><UserPlus className="w-4 h-4" /> Connect</>}
                                    {connectStatus === 'sending' && 'Sending...'}
                                    {connectStatus === 'sent' && <><CheckCircle className="w-4 h-4" /> Sent</>}
                                </button>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">

                            {/* Main Bio & Skills */}
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h2 className="text-xl font-bold text-slate-900 mb-4 block border-b border-slate-100 pb-2">About</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {member.bio}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-slate-900 mb-4 block border-b border-slate-100 pb-2">Professional Expertise</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-aviation-200 transition-colors">
                                            <div className="flex items-center gap-3 mb-2 text-aviation-700 font-semibold">
                                                <Award className="w-5 h-5" /> License
                                            </div>
                                            <p className="text-slate-900 font-medium">{member.license.replace(/_/g, ' ')}</p>
                                        </div>
                                        <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-aviation-200 transition-colors">
                                            <div className="flex items-center gap-3 mb-2 text-aviation-700 font-semibold">
                                                <Briefcase className="w-5 h-5" /> Experience
                                            </div>
                                            <p className="text-slate-900 font-medium">{member.yearsExperience} Years</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-slate-900 mb-4 block border-b border-slate-100 pb-2">Qualifications & Certifications</h2>
                                    <ul className="space-y-3">
                                        {member.certifications?.map((cert, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                                <span className="text-slate-700">{cert}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-slate-900 mb-4 block border-b border-slate-100 pb-2">Specializations</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {member.specializations.map((spec, i) => (
                                            <span key={i} className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-medium shadow-sm">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Details */}
                            <div className="space-y-6">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-slate-600 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 group-hover:border-aviation-200 group-hover:text-aviation-600 transition">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm truncate font-medium">{member.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-600 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 group-hover:border-aviation-200 group-hover:text-aviation-600 transition">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-medium">{member.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-600 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 group-hover:border-aviation-200 group-hover:text-aviation-600 transition">
                                                <Linkedin className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-medium">Public Profile</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">Current Status</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm pb-3 border-b border-slate-200">
                                            <span className="text-slate-500">Employer</span>
                                            <span className="font-semibold text-slate-900 text-right">{member.currentEmployer}</span>
                                        </div>
                                        <div className="flex justify-between text-sm pb-3 border-b border-slate-200">
                                            <span className="text-slate-500">Availability</span>
                                            <span className="font-medium text-green-600 flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                {member.availability}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Education</span>
                                            <span className="font-semibold text-slate-900 text-right max-w-[60%]">{member.education}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Message Modal */}
            {isMessageModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMessageModalOpen(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
                        <div className="bg-aviation-900 px-6 py-4 flex items-center justify-between">
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                <MessageSquare className="w-5 h-5" /> Message {member.name.split(' ')[0]}
                            </h3>
                            <button onClick={() => setIsMessageModalOpen(false)} className="text-white/70 hover:text-white transition">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                setIsMessageModalOpen(false);
                                alert('Message sent!');
                            }} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" placeholder="Opportunity / Inquiry" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" placeholder="Write your message here..." required></textarea>
                                </div>
                                <div className="pt-2 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsMessageModalOpen(false)}
                                        className="px-6 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-lg transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-aviation-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-aviation-700 transition flex items-center gap-2"
                                    >
                                        <Send className="w-4 h-4" /> Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
