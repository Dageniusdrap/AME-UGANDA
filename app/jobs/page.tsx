import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Filter, Search } from 'lucide-react';

export default function JobsPage() {
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

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="bg-aviation-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Aviation Careers</h1>
                    <p className="text-xl text-aviation-200 max-w-2xl mx-auto">
                        Find your next opportunity or post a vacancy to reach Uganda's top engineering talent.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Actions Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                        <div className="flex w-full md:max-w-xl bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="flex-1 flex items-center px-4">
                                <Search className="w-5 h-5 text-gray-400 mr-2" />
                                <input type="text" placeholder="Search jobs, companies, or keywords..." className="w-full py-3 focus:outline-none text-gray-700" />
                            </div>
                            <button className="bg-gray-100 px-6 font-medium text-gray-600 hover:bg-gray-200 border-l border-gray-200">
                                Filters
                            </button>
                        </div>
                        <button className="w-full md:w-auto bg-aviation-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-aviation-700 shadow-md shadow-aviation-600/20 transition">
                            Post a Job
                        </button>
                    </div>

                    {/* Jobs List */}
                    <div className="space-y-6">
                        {jobs.map((job) => (
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
                                        <button className="hidden md:block bg-white border border-aviation-600 text-aviation-600 hover:bg-aviation-50 px-6 py-2 rounded-lg font-semibold text-sm transition mt-2">
                                            View Details
                                        </button>
                                    </div>
                                    <button className="md:hidden w-full bg-aviation-600 text-white py-2 rounded-lg font-semibold">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}
