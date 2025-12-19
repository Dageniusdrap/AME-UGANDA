import React from 'react';
import { Search, Filter, ShieldCheck } from 'lucide-react';

export default function MembersPage() {
    const members = [
        { name: 'Sarah N.', license: 'B1.1 Turbine', status: 'Active', since: '2015', role: 'Chief Engineer' },
        { name: 'David O.', license: 'B2 Avionics', status: 'Active', since: '2018', role: 'Licensed AME' },
        { name: 'Peter K.', license: 'A-License', status: 'Active', since: '2020', role: 'Line Maintenance' },
        { name: 'Mary A.', license: 'Student', status: 'Active', since: '2023', role: 'Apprentice' },
        { name: 'John M.', license: 'C-License', status: 'Active', since: '2010', role: 'Base Maintenance Manager' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="bg-aviation-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Member Directory</h1>
                    <p className="text-xl text-aviation-200">
                        Verify the status of paid-up members and connect with professionals.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search & Filter */}
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by name or license number..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter by Category
                            </button>
                        </div>
                    </div>

                    {/* Members Grid/List */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Name</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">License / Qualification</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Role</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Member Since</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {members.map((member, index) => (
                                        <tr key={index} className="hover:bg-aviation-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">{member.name}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {member.license}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{member.role}</td>
                                            <td className="px-6 py-4 text-gray-600">{member.since}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center text-green-600 text-sm font-medium">
                                                    <ShieldCheck className="w-4 h-4 mr-1" />
                                                    {member.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-gray-500 text-sm">
                        Note: This directory displays only current, paid-up members who have opted in to value publicity.
                    </div>
                </div>
            </section>
        </div>
    );
}
