'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Briefcase, AlertCircle, Zap, Users, FileText, ChevronRight, Calendar, TrendingUp } from 'lucide-react';

export default function AdvocacyPage() {
  const [activeTab, setActiveTab] = useState('all');

  const advocacyInitiatives = [
    {
      id: 1,
      title: 'Fair Wage Standards for Aircraft Maintenance Technicians',
      category: 'WAGE_STANDARDS',
      priority: 'CRITICAL',
      description: 'Advocating for minimum wage standards aligned with international best practices for AMEs in Uganda.',
      status: 'ACTIVE',
      targetAudience: 'Government, Airlines',
      date: '2025-01-15',
      image: '💼',
    },
    {
      id: 2,
      title: 'Workplace Safety & Labor Rights Initiative',
      category: 'WORKPLACE_RIGHTS',
      priority: 'HIGH',
      description: 'Ensuring safe working conditions and protection of member rights in the aviation sector.',
      status: 'ACTIVE',
      targetAudience: 'Employers, Members',
      date: '2025-01-10',
      image: '🛡️',
    },
    {
      id: 3,
      title: 'Professional Recognition & Licensing Reform',
      category: 'PROFESSIONAL_RECOGNITION',
      priority: 'HIGH',
      description: 'Pushing for streamlined certification processes and international recognition of Ugandan AME licenses.',
      status: 'ACTIVE',
      targetAudience: 'CAAK, Government',
      date: '2024-12-20',
      image: '📜',
    },
    {
      id: 4,
      title: 'Aviation Safety Standards Alignment',
      category: 'SAFETY_STANDARDS',
      priority: 'MEDIUM',
      description: 'Aligning Uganda\'s aviation safety standards with EASA and ICAO requirements.',
      status: 'ACTIVE',
      targetAudience: 'Government, CAAK',
      date: '2024-12-15',
      image: '✈️',
    },
    {
      id: 5,
      title: 'Training & Development Standards',
      category: 'TRAINING_STANDARDS',
      priority: 'MEDIUM',
      description: 'Establishing mandatory training standards and continuous professional development requirements.',
      status: 'PENDING_REVIEW',
      targetAudience: 'Training Providers, CAAK',
      date: '2024-12-10',
      image: '📚',
    },
    {
      id: 6,
      title: 'Job Protection & Employment Rights',
      category: 'JOB_PROTECTION',
      priority: 'HIGH',
      description: 'Protecting members from unfair termination and ensuring fair employment practices.',
      status: 'ACTIVE',
      targetAudience: 'Employers, Members',
      date: '2024-12-05',
      image: '⚖️',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return 'bg-red-100 text-red-800 border-red-300';
      case 'HIGH': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      WORKPLACE_RIGHTS: <Shield className="w-5 h-5" />,
      WAGE_STANDARDS: <TrendingUp className="w-5 h-5" />,
      SAFETY_STANDARDS: <AlertCircle className="w-5 h-5" />,
      REGULATORY_REFORM: <FileText className="w-5 h-5" />,
      TRAINING_STANDARDS: <Users className="w-5 h-5" />,
      JOB_PROTECTION: <Briefcase className="w-5 h-5" />,
      PROFESSIONAL_RECOGNITION: <Zap className="w-5 h-5" />,
      POLICY_ADVOCACY: <FileText className="w-5 h-5" />,
    };
    return icons[category as keyof typeof icons] || <Shield className="w-5 h-5" />;
  };

  const filteredInitiatives = activeTab === 'all'
    ? advocacyInitiatives
    : advocacyInitiatives.filter(i => i.priority === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-aviation-950 to-slate-900"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-aviation-500/20 text-aviation-200 border border-aviation-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
              <Shield className="w-4 h-4" />
              <span>We Stand Together</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-aviation-200 mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
              Advocacy & Member <br /> Protection
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Aviation Engineers Uganda is a movement to reclaim our industry. We demand the prioritization of qualified Ugandan engineers over foreign labor, ensuring fair wages and equal benefits for our Aeronautical, Aerospace, and Maintenance experts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Link href="/sign-up" className="bg-aviation-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-aviation-600/25 hover:bg-aviation-500 hover:scale-105 transition-all duration-300">
                Join the Movement
              </Link>
              <Link href="/about" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Advocacy Pillars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Uganda First',
              description: 'Fighting for the First Right of Refusal for qualified Ugandan nationals in all technical aviation roles.',
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Equal Pay for Equal Work',
              description: 'Addressing the wage gap between local and expatriate engineers doing the same job.',
            },
            {
              icon: <AlertCircle className="w-8 h-8" />,
              title: 'Safety Standards',
              description: 'Ensuring highest aviation safety standards and compliance.',
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: 'Regulatory Reform',
              description: 'Working with government on fair and progressive aviation regulations.',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Professional Development',
              description: 'Promoting continuous training and career advancement opportunities.',
            },
            {
              icon: <Briefcase className="w-8 h-8" />,
              title: 'Career Protection',
              description: 'Safeguarding member employment and professional interests.',
            },
          ].map((pillar, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-aviation-600 mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Initiatives */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Active Initiatives</h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b">
            {['all', 'CRITICAL', 'HIGH', 'MEDIUM'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-semibold transition ${activeTab === tab
                  ? 'text-aviation-600 border-b-2 border-aviation-600'
                  : 'text-gray-600 hover:text-aviation-600'
                  }`}
              >
                {tab === 'all' ? 'All' : `${tab} Priority`}
              </button>
            ))}
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredInitiatives.map(initiative => (
              <div key={initiative.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{initiative.image}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(initiative.priority)}`}>
                      {initiative.priority}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(initiative.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-aviation-600 font-semibold">{initiative.targetAudience}</span>
                    <Link href={`#initiative-${initiative.id}`} className="text-aviation-600 hover:text-aviation-700 font-semibold flex items-center gap-1">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-aviation-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved in Our Advocacy Work</h2>
          <p className="text-xl text-aviation-100 mb-8">
            Support our initiatives and help protect the interests of Uganda's aerospace professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="bg-white text-aviation-600 px-8 py-3 rounded-lg font-bold hover:bg-aviation-50 transition">
              Become a Member
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
