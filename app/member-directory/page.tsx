'use client';

import React, { useState } from 'react';
import { Search, MapPin, Award, Briefcase, Filter, ChevronDown } from 'lucide-react';

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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Member Directory</h1>
          <p className="text-purple-100">
            Connect with verified aircraft maintenance professionals and aerospace engineers across Uganda and the region.
          </p>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
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
                      <span key={i} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
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
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Member Community Stats</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Total Members', value: '350+' },
              { label: 'Verified Engineers', value: '280+' },
              { label: 'Countries Represented', value: '5' },
              { label: 'Average Experience', value: '12 years' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center border border-purple-200">
                <p className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
