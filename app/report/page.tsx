'use client';

import React, { useState } from 'react';
import { Shield, Lock, AlertTriangle, Send, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ReportPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setSubmitted(true), 1500);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-20 px-4">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Report Received</h2>
                    <p className="text-slate-600 mb-8">
                        Thank you for speaking up. Your report has been securely encrypted and sent to our legal advocacy team.
                        {isAnonymous && " Your identity remains completely anonymous."}
                    </p>
                    <Link href="/" className="bg-aviation-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-aviation-700 transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Lock className="w-4 h-4" />
                        <span>Secure & Confidential</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Whistleblower Portal</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Report unfair hiring practices, wage theft, or safety violations.
                        We protect our members and boldy challenge systemic issues.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Sidebar Info */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-aviation-900 text-white p-8 rounded-3xl shadow-xl">
                            <Shield className="w-12 h-12 text-aviation-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Your Protection is Paramount</h3>
                            <p className="text-aviation-100 text-sm leading-relaxed mb-6">
                                Aviation Engineers Uganda utilizes industry-standard encryption. We do not log IP addresses for anonymous reports.
                            </p>
                            <div className="border-t border-white/10 pt-6">
                                <h4 className="font-semibold text-white mb-2">What happens next?</h4>
                                <ol className="text-sm text-aviation-200 space-y-3 list-decimal pl-4">
                                    <li>Legal team review (24hrs)</li>
                                    <li>Assessment of violation</li>
                                    <li>Strategic action plan</li>
                                    <li>Regulatory body notification (if applicable)</li>
                                </ol>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                                <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                                Reportable Issues
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 mr-2"></div>Foreign labor preference over qualified locals</li>
                                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 mr-2"></div>Wage disparity & benefits denial</li>
                                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 mr-2"></div>Unsafe maintenance practices</li>
                                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 mr-2"></div>Harassment or intimidation</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
                            <form onSubmit={handleSubmit} className="space-y-8">

                                <div className="space-y-4">
                                    <label className="block text-lg font-bold text-slate-900">1. Incident Security</label>
                                    <div className="bg-slate-50 p-4 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200" onClick={() => setIsAnonymous(!isAnonymous)}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className={`w-6 h-6 rounded-md border-2 mr-4 flex items-center justify-center transition-colors ${isAnonymous ? 'bg-aviation-600 border-aviation-600' : 'border-slate-300'}`}>
                                                    {isAnonymous && <CheckCircle className="w-4 h-4 text-white" />}
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-slate-900">Remain Anonymous</span>
                                                    <span className="text-sm text-slate-500">Your name and contact info will not be included.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-lg font-bold text-slate-900">2. Incident Details</label>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Company / Organization</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aviation-500 focus:outline-none transition" placeholder="e.g. Airline X" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Location / Airport</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aviation-500 focus:outline-none transition" placeholder="e.g. Entebbe Hangar 2" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Type of Violation</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aviation-500 focus:outline-none transition bg-white">
                                            <option>Unfair Hiring / Foreign Preference</option>
                                            <option>Wage Theft / Disparity</option>
                                            <option>Safety Violation</option>
                                            <option>Harassment</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                        <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-aviation-500 focus:outline-none transition" placeholder="Please describe what happened, providing as much detail as possible..." required></textarea>
                                    </div>
                                </div>

                                {!isAnonymous && (
                                    <div className="space-y-4 animate-fade-in">
                                        <label className="block text-lg font-bold text-slate-900">3. Contact Info (Optional)</label>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="Your Name" />
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="Email Address" />
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/30 transition-all flex items-center justify-center transform active:scale-95">
                                        <Send className="w-5 h-5 mr-2" />
                                        Submit Confidential Report
                                    </button>
                                    <p className="text-center text-xs text-slate-400 mt-4">
                                        By submitting, you agree to our privacy policy regarding whistleblower data handling.
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
