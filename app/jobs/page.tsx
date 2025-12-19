'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Filter, Search, PlusCircle, X, CheckCircle, Upload } from 'lucide-react';

export default function JobsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeModal, setActiveModal] = useState<'none' | 'apply' | 'post-job'>('none');
    const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const jobs = [
        {
            id: 1,
            title: 'B1.1 Licensed Engineer',
            company: 'Nile Air Safaris',
            location: 'Entebbe International Airport',
            type: 'Full-time',
            salary: 'Competitive',
            posted: '2 days ago',
            tags: ['B1.1', 'Cessna Caravan', 'Turbine']
        },
        {
            id: 2,
            title: 'Avionics Technician (Unlicensed)',
            company: 'Kampala Aero MRO',
            location: 'Kajjansi Airfield',
            type: 'Contract',
            salary: 'UGX 2.5M - 3.5M',
            posted: '1 week ago',
            tags: ['Avionics', 'Entry Level', 'Installation']
        },
        {
            id: 3,
            title: 'Quality Assurance Manager',
            company: 'Uganda Airlines',
            location: 'Entebbe',
            type: 'Full-time',
            salary: 'Negotiable',
            posted: '3 days ago',
            tags: ['Management', 'QA', 'Regulatory']
        },
        {
            id: 4,
            title: 'Sheet Metal Structure Repairer',
            company: 'General Aviation Services',
            location: 'Entebbe',
            type: 'Full-time',
            salary: 'Competitive',
            posted: '5 days ago',
            tags: ['Structures', 'Sheet Metal']
        },
    ];

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleApply = (jobId: number) => {
        setSelectedJobId(jobId);
        setActiveModal('apply');
        setFormStatus('idle');
    };

    const handlePostJob = () => {
        setActiveModal('post-job');
        setFormStatus('idle');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => {
                setActiveModal('none');
                setFormStatus('idle');
            }, 2000);
        }, 1500);
    };

    const selectedJob = jobs.find(j => j.id === selectedJobId);

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950"></div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-2 bg-slate-700/30 text-slate-300 border border-slate-600/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
                            <Briefcase className="w-4 h-4" />
                            <span>Career Acceleration</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Aviation <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-400">Careers</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                            Connect with top engineering talent and premium employers. The official job board for Uganda's aviation professionals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Actions Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                        <div className="flex w-full md:max-w-xl bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-aviation-500/20 focus-within:border-aviation-500 transition-all">
                            <div className="flex-1 flex items-center px-4">
                                <Search className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search jobs, companies, or keywords..."
                                    className="w-full py-3 focus:outline-none text-gray-700"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <button
                            onClick={handlePostJob}
                            className="w-full md:w-auto bg-aviation-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-aviation-700 shadow-md shadow-aviation-600/20 transition flex items-center justify-center gap-2"
                        >
                            <PlusCircle className="w-5 h-5" /> Post a Job
                        </button>
                    </div>

                    {/* Jobs List */}
                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-aviation-200 hover:shadow-md transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-aviation-600 transition-colors">{job.title}</h3>
                                        <div className="flex items-center text-gray-600 mt-1 mb-3">
                                            <Briefcase className="w-4 h-4 mr-1.5" />
                                            <span className="font-medium mr-4">{job.company}</span>
                                            <MapPin className="w-4 h-4 mr-1.5" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full text-xs font-medium border border-slate-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                                        <div className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                            <DollarSign className="w-3 h-3 mr-1" />
                                            {job.salary}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-400">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {job.posted}
                                        </div>
                                        <button
                                            onClick={() => handleApply(job.id)}
                                            className="w-full md:w-auto bg-white border border-aviation-600 text-aviation-600 hover:bg-aviation-600 hover:text-white px-6 py-2 rounded-lg font-semibold text-sm transition mt-2 transform active:scale-95"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-20 text-slate-500">
                                <p className="text-lg">No jobs found via search.</p>
                                <button onClick={() => setSearchTerm('')} className="text-aviation-600 font-bold hover:underline mt-2">Clear filters</button>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            {/* General Modal Backdrop */}
            {activeModal !== 'none' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')}></div>

                    {/* Apply Modal */}
                    {activeModal === 'apply' && selectedJob && (
                        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
                            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                                <h3 className="text-white font-bold text-lg">Apply for {selectedJob.title}</h3>
                                <button onClick={() => setActiveModal('none')} className="text-white/70 hover:text-white transition">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                {formStatus === 'success' ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Application Sent!</h3>
                                        <p className="text-slate-600">Good luck! The employer will contact you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                                            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                                            <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Resume / CV</label>
                                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 cursor-pointer transition">
                                                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                                <p className="text-sm text-slate-500 font-medium">Click to upload PDF or DOCX</p>
                                            </div>
                                        </div>
                                        <div className="pt-2 flex justify-end gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setActiveModal('none')}
                                                className="px-6 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-lg transition"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={formStatus === 'sending'}
                                                className="bg-aviation-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-aviation-700 transition flex items-center gap-2"
                                            >
                                                {formStatus === 'sending' ? 'Sending...' : 'Submit Application'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Post Job Modal */}
                    {activeModal === 'post-job' && (
                        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden animate-fade-in-up">
                            <div className="bg-aviation-900 px-6 py-4 flex items-center justify-between">
                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                    <PlusCircle className="w-5 h-5" /> Post a New Job
                                </h3>
                                <button onClick={() => setActiveModal('none')} className="text-white/70 hover:text-white transition">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                {formStatus === 'success' ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Job Posted!</h3>
                                        <p className="text-slate-600">Your listing is under review and will be live shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Job Title</label>
                                                <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" placeholder="e.g. Senior AME" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Company Name</label>
                                                <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" placeholder="e.g. Eagle Air" />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Location</label>
                                                <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" placeholder="e.g. Entebbe" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Job Type</label>
                                                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none bg-white">
                                                    <option>Full-time</option>
                                                    <option>Part-time</option>
                                                    <option>Contract</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Job Description</label>
                                            <textarea rows={4} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none" placeholder="Describe the role and requirements..."></textarea>
                                        </div>
                                        <div className="pt-2 flex justify-end gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setActiveModal('none')}
                                                className="px-6 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-lg transition"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={formStatus === 'sending'}
                                                className="bg-aviation-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-aviation-700 transition flex items-center gap-2"
                                            >
                                                {formStatus === 'sending' ? 'Posting...' : 'Post Job Now'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
