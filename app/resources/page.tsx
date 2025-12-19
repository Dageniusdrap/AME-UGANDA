import React from 'react';
import Link from 'next/link';
import { FileText, Download, ExternalLink, Book } from 'lucide-react';

export default function ResourcesPage() {
    const resources = [
        {
            category: 'Regulatory',
            items: [
                { title: 'CAA Uganda AME Licensing Guidance', type: 'PDF', size: '2.4 MB' },
                { title: 'Logbook Maintenance Guidelines', type: 'PDF', size: '1.1 MB' },
                { title: 'Airworthiness Notice No. 12', type: 'PDF', size: '0.8 MB' },
            ]
        },
        {
            category: 'Technical',
            items: [
                { title: 'Standard Wiring Practices Manual', type: 'PDF', size: '15 MB' },
                { title: 'Human Factors in Maintenance', type: 'Video', size: 'Link' },
                { title: 'Composite Repair Basics', type: 'Article', size: 'Link' },
            ]
        },
        {
            category: 'Career',
            items: [
                { title: 'Aviation Engineers Uganda Resume Template', type: 'DOCX', size: '0.5 MB' },
                { title: 'Interview Preparation Guide', type: 'PDF', size: '1.2 MB' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-950"></div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
                            <Book className="w-4 h-4" />
                            <span>Knowledge Hub</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Resources <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">Library</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                            Access technical documents, regulatory updates, and career tools. Empowering your professional journey with the right information.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="bg-aviation-100 p-6 border-b border-aviation-200">
                                    <h3 className="text-xl font-bold text-aviation-900">{section.category}</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-center justify-between group cursor-pointer">
                                                <div className="flex items-center">
                                                    <FileText className="w-5 h-5 text-aviation-400 mr-3 group-hover:text-aviation-600 transition" />
                                                    <span className="text-gray-700 font-medium group-hover:text-aviation-700 transition">{item.title}</span>
                                                </div>
                                                {item.type === 'PDF' || item.type === 'DOCX' ? (
                                                    <Download className="w-4 h-4 text-gray-400 group-hover:text-aviation-600 transition" />
                                                ) : (
                                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-aviation-600 transition" />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-white rounded-xl p-8 shadow-md flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-amber-100 p-4 rounded-full mr-6">
                                <Book className="w-8 h-8 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Exam Preparation Center</h3>
                                <p className="text-gray-600">Prepare for your CAA license exams with our practice quizzes.</p>
                            </div>
                        </div>
                        <Link href="/certifications" className="bg-aviation-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-aviation-700 transition">
                            Access Exam Portal
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
