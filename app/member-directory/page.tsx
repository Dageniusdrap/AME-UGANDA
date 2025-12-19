'use client';

import React, { useState } from 'react';
import { Search, MapPin, Award, Briefcase, Filter, ChevronDown, Users } from 'lucide-react';

export default function MemberDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedLicense, setSelectedLicense] = useState('all');

  const members = [
    {
      id: 1,
      name: 'James Kwizera',
      title: 'Senior Aircraft Maintenance Engineer',
      location: 'Entebbe, Uganda',
      license: 'AME_CAT_A',
      specializations: ['Mechanical Systems', 'Turbine Engines'],
      yearsExperience: 15,
      verified: true,
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Ouma',
      title: 'Avionics Technician',
      location: 'Kampala, Uganda',
      license: 'AME_CAT_B',
      specializations: ['Avionics', 'Flight Control Systems'],
      yearsExperience: 8,
      verified: true,
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'Moses Kamau',
      title: 'Aircraft Maintenance Manager',
      location: 'Jinja, Uganda',
      license: 'AME_CAT_C',
      specializations: ['Maintenance Management', 'Hydraulics', 'Electrical'],
      yearsExperience: 20,
      verified: true,
      avatar: '👨‍💼',
    },
    {
      id: 4,
      name: 'Florence Mwangi',
      title: 'Junior AME - Trainee',
      location: 'Kampala, Uganda',
      license: 'STUDENT',
      specializations: ['General Maintenance', 'Safety'],
      yearsExperience: 0,
      verified: false,
      avatar: '👩‍🎓',
    },
    {
      id: 5,
      name: 'Peter Koech',
      title: 'Structural Repair Specialist',
      location: 'Entebbe, Uganda',
      license: 'AME_CAT_A',
      specializations: ['Composite Repair', 'Sheet Metal', 'Structures'],
      yearsExperience: 12,
      verified: true,
      avatar: '👨‍💼',
    },
    {
      id: 6,
      name: 'Jane Mwangi',
      title: 'Engine Overhaul Specialist',
      location: 'Dar es Salaam, Tanzania',
      license: 'AME_CAT_A',
      specializations: ['Turbine Engines', 'Piston Engines'],
      yearsExperience: 18,
      verified: true,
      avatar: '👩‍💼',
    },
  ];

  const specializations = [
    'All',
    'Mechanical Systems',
    'Avionics',
    'Turbine Engines',
    'Hydraulics',
    'Electrical',
    'Structures',
    'Flight Control Systems',
    'Composite Repair',
  ];

  const licenses = [
    { value: 'all', label: 'All Licenses' },
    { value: 'AME_CAT_A', label: 'Category A - Mechanical' },
    { value: 'AME_CAT_B', label: 'Category B - Avionics' },
    { value: 'AME_CAT_C', label: 'Category C - Both' },
    { value: 'STUDENT', label: 'Student/Trainee' },
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'all' ||
      member.specializations.includes(selectedSpecialization);
    const matchesLicense = selectedLicense === 'all' || member.license === selectedLicense;

    return matchesSearch && matchesSpecialization && matchesLicense;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
              <Users className="w-4 h-4" />
              <span>Connect Globally</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
              Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-200">Directory</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Connect with verified aircraft maintenance professionals and aerospace engineers across Uganda and the region. Build your network with trusted peers.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b border-gray-200 py-8 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, title, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-aviation-500 focus:ring-2 focus:ring-aviation-500/20 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* License Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">License Type</label>
              <select
                value={selectedLicense}
                onChange={(e) => setSelectedLicense(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-aviation-500 focus:ring-2 focus:ring-aviation-500/20 transition-all font-medium text-slate-700"
              >
                {licenses.map(license => (
                  <option key={license.value} value={license.value}>
                    {license.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Specialization Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Specialization</label>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-aviation-500 focus:ring-2 focus:ring-aviation-500/20 transition-all font-medium text-slate-700"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec === 'All' ? 'all' : spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredMembers.length} of {members.length} members
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredMembers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map(member => (
              <div key={member.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{member.avatar}</span>
                  {member.verified && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.title}</p>

                <div className="space-y-3 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {member.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    {member.license.replace(/_/g, ' ')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 flex-shrink-0" />
                    {member.yearsExperience === 0 ? 'Trainee' : `${member.yearsExperience} years`}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-600 font-semibold mb-2">Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md text-xs font-medium group-hover:border-aviation-200 group-hover:text-aviation-700 transition-colors">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-aviation-600 to-aviation-700 text-white py-2.5 rounded-lg font-bold shadow-lg shadow-aviation-600/20 hover:shadow-aviation-600/30 hover:scale-[1.02] transition-all duration-300 border border-aviation-600/20">
                  Connect
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No members found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialization('all');
                setSelectedLicense('all');
              }}
              className="text-aviation-600 hover:text-aviation-700 font-semibold underline decoration-2 decoration-transparent hover:decoration-aviation-600 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Member Community Stats</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Total Members', value: '350+' },
              { label: 'Verified Engineers', value: '280+' },
              { label: 'Countries Represented', value: '5' },
              { label: 'Average Experience', value: '12 years' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center border border-slate-200 hover:border-aviation-200 hover:shadow-lg transition-all duration-300 group">
                <p className="text-3xl font-bold text-slate-800 group-hover:text-aviation-600 transition-colors mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
