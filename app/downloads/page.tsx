'use client';

import { FileText, Download, ExternalLink, Shield, FileCheck, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';

export default function DownloadsPage() {
    const handleDownload = (fileName: string) => {
        toast.loading(`Starting download: ${fileName}...`);
        setTimeout(() => {
            toast.success(`${fileName} downloaded successfully.`);
        }, 1500);
    };

    const formCategories = [
        {
            title: "CAA Regulatory Forms",
            description: "Official forms from the Uganda Civil Aviation Authority for licensing and airworthiness.",
            icon: Shield,
            items: [
                { id: 'caa-1', title: 'Form 19: License Application', size: '150 KB', type: 'PDF' },
                { id: 'caa-2', title: 'Form 20: Medical Application', size: '120 KB', type: 'PDF' },
                { id: 'caa-3', title: 'O.P.R: Occurrence Report', size: '200 KB', type: 'DOCX' },
                { id: 'caa-4', title: 'Fit & Proper Person Form', size: '180 KB', type: 'PDF' }
            ]
        },
        {
            title: "Engineering & Technical Logs",
            description: "Standardized templates for maintenance recording, shift handovers, and experience logging.",
            icon: Briefcase,
            items: [
                { id: 'eng-1', title: 'AME Experience Logbook Template', size: '2.4 MB', type: 'XLSX' },
                { id: 'eng-2', title: 'Shift Handover Record', size: '450 KB', type: 'DOCX' },
                { id: 'eng-3', title: 'OJT Task Record', size: '320 KB', type: 'PDF' }
            ]
        },
        {
            title: "Association Forms",
            description: "Membership applications, renewal forms, and benevolent fund requests.",
            icon: FileCheck,
            items: [
                { id: 'asc-0', title: 'Constitution & Bylaws', size: '1.5 MB', type: 'PDF' },
                { id: 'asc-1', title: 'Full Membership Application', size: '1.2 MB', type: 'PDF' },
                { id: 'asc-2', title: 'Benevolent Fund Claim Form', size: '850 KB', type: 'PDF' },
                { id: 'asc-3', title: 'Proxy Vote Form 2025', size: '120 KB', type: 'PDF' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Resources & <span className="text-aviation-600">Downloads</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        A centralized repository for essential aviation documents. Access standard forms,
                        regulatory templates, and association resources to support your daily operations.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {formCategories.map((category, idx) => (
                        <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                            {/* Category Header */}
                            <div className="p-8 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
                                <div className="w-12 h-12 bg-aviation-50 rounded-2xl flex items-center justify-center mb-6 text-aviation-600">
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            {/* Items List */}
                            <div className="p-4 flex-1">
                                <ul className="space-y-2">
                                    {category.items.map((item) => (
                                        <li key={item.id} className="group flex items-center justify-between p-3 rounded-xl hover:bg-aviation-50/50 transition-colors border border-transparent hover:border-aviation-100">
                                            <div className="flex items-center space-x-3 overflow-hidden">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-aviation-500 transition-colors">
                                                    <FileText className="w-4 h-4" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-semibold text-slate-700 truncate group-hover:text-aviation-700 transition-colors">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                                                        {item.type} • {item.size}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="text-slate-400 hover:text-aviation-600 hover:bg-white shrink-0"
                                                onClick={() => handleDownload(item.title)}
                                            >
                                                <Download className="w-4 h-4" />
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
                                <Button variant="link" className="text-aviation-600 hover:text-aviation-700 text-xs h-auto py-1">
                                    View All {category.title} <ExternalLink className="w-3 h-3 ml-1" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Notice */}
                <div className="mt-16 bg-amber-50 rounded-2xl p-6 border border-amber-100 flex items-start gap-4 max-w-4xl mx-auto">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-600 shrink-0">
                        <Shield className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-amber-900">Disclaimer Regarding Regulatory Forms</h4>
                        <p className="text-sm text-amber-700/80 mt-1 leading-relaxed">
                            While we strive to keep these forms updated, essential regulatory documents should always be verified against the official
                            <Link href="https://caa.go.ug" target="_blank" className="underline hover:text-amber-900 mx-1 font-medium">
                                Uganda Civil Aviation Authority
                            </Link>
                            website for the latest versions. Aviation Engineers Uganda is not responsible for the use of outdated forms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
