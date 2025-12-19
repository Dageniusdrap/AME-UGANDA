'use client';

import { Download, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function NewslettersPage() {
    const handleDownload = (title: string) => {
        toast.info(`Downloading newsletter: ${title}`, {
            description: "Check your downloads folder shortly."
        });
    };

    // Mock data based on the structure of the target site (Quarterly/Bimonthly updates)
    const newsletters = [
        {
            id: '1',
            title: 'Q4 2025: Engineering Excellence',
            volume: 'Vol. 2 Number 4',
            date: 'December 2025',
            description: 'Year-end review, safety updates for the holiday season, and 2026 strategic outlook.',
            size: '2.4 MB'
        },
        {
            id: '2',
            title: 'Q3 2025: Safety & Compliance',
            volume: 'Vol. 2 Number 3',
            date: 'October 2025',
            description: 'Focus on new UCAA regulations, maintenance safety surveys, and member spotlight.',
            size: '1.8 MB'
        },
        {
            id: '3',
            title: 'Q2 2025: Training & Development',
            volume: 'Vol. 2 Number 2',
            date: 'August 2025',
            description: 'Recap of the Annual General Meeting, training opportunities, and scholarship winners.',
            size: '3.1 MB'
        },
        {
            id: '4',
            title: 'Q1 2025: Innovation in Aviation',
            volume: 'Vol. 2 Number 1',
            date: 'April 2025',
            description: 'Emerging technologies in aircraft maintenance, sustainable aviation fuels, and future tech.',
            size: '2.2 MB'
        },
        {
            id: '5',
            title: 'Winter 2024: Association Updates',
            volume: 'Vol. 1 Number 6',
            date: 'December 2024',
            description: 'Launch of the new digital platform, membership drive results, and industry partnerships.',
            size: '1.5 MB'
        },
        {
            id: '6',
            title: 'Fall 2024: Inaugural Issue',
            volume: 'Vol. 1 Number 1',
            date: 'October 2024',
            description: 'Welcome to the first edition of the Aviation Engineers Uganda official newsletter.',
            size: '1.2 MB'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Official <span className="text-aviation-600">Newsletters</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Stay informed with our official publications. Access detailed reports, association updates,
                        regulatory news, and technical articles delivered directly to our members.
                    </p>
                </div>

                {/* Newsletter Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {newsletters.map((newsletter) => (
                        <div
                            key={newsletter.id}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-aviation-50 rounded-xl group-hover:bg-aviation-100 transition-colors">
                                    <FileText className="w-8 h-8 text-aviation-600" />
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                    {newsletter.volume}
                                </span>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center text-sm text-slate-500 mb-2">
                                    <Calendar className="w-4 h-4 mr-1.5" />
                                    {newsletter.date}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-aviation-700 transition-colors">
                                    {newsletter.title}
                                </h3>
                            </div>

                            <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                {newsletter.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <span className="text-xs font-medium text-slate-400">
                                    PDF • {newsletter.size}
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 group-hover:border-aviation-200 group-hover:bg-aviation-50"
                                    onClick={() => handleDownload(newsletter.title)}
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subscription CTA */}
                <div className="mt-20 bg-aviation-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Never Miss an Update
                        </h2>
                        <p className="text-aviation-100 mb-8">
                            Subscribe to our mailing list to receive the latest newsletters, safety alerts,
                            and industry news directly in your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-5 py-3 rounded-lg text-slate-900 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-aviation-400"
                            />
                            <Button className="bg-aviation-500 hover:bg-aviation-400 text-white px-8 py-3 h-auto text-base">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
