'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, FileText, CheckCircle, Clock, AlertCircle, TrendingUp, Bell, Download } from 'lucide-react';

export default function CompliancePage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const updates = [
    {
      id: 1,
      title: 'EASA New Maintenance License Requirements (AMC-66)',
      authority: 'EASA',
      type: 'NEW_REGULATION',
      severity: 'CRITICAL',
      effectiveDate: '2025-03-01',
      description: 'Significant changes to AME license requirements including new CRM and safety management training.',
      affectedAreas: ['Licensing', 'Training', 'Certification'],
      referenceUrl: 'https://easa.europa.eu',
      daysUntilEffective: 43,
    },
    {
      id: 2,
      title: 'CAAK Safety Directive: Composite Material Inspection Procedures',
      authority: 'CAAK',
      type: 'SAFETY_DIRECTIVE',
      severity: 'CRITICAL',
      effectiveDate: '2025-02-15',
      description: 'Updated procedures for composite material inspection on aircraft structures.',
      affectedAreas: ['Maintenance', 'Safety', 'Inspection'],
      referenceUrl: 'https://caak.go.ug',
      daysUntilEffective: 28,
    },
    {
      id: 3,
      title: 'Amendment to Part-66 Continuing Education Requirements',
      authority: 'EASA',
      type: 'AMENDMENT',
      severity: 'HIGH',
      effectiveDate: '2025-06-01',
      description: 'Changes to CPD hour requirements and new mandatory training modules.',
      affectedAreas: ['Training', 'CPD', 'Certification'],
      referenceUrl: 'https://easa.europa.eu',
      daysUntilEffective: 135,
    },
    {
      id: 4,
      title: 'Uganda Aviation Authority Guidance: Environmental Compliance',
      authority: 'CAAK',
      type: 'GUIDANCE',
      severity: 'WARNING',
      effectiveDate: '2025-04-15',
      description: 'New environmental protection requirements for MRO facilities.',
      affectedAreas: ['Environmental', 'Facilities', 'Compliance'],
      referenceUrl: 'https://caak.go.ug',
      daysUntilEffective: 88,
    },
    {
      id: 5,
      title: 'ICAO Safety Management Systems Update',
      authority: 'ICAO',
      type: 'POLICY_CHANGE',
      severity: 'HIGH',
      effectiveDate: '2025-07-01',
      description: 'Implementation of new SMS standards for maintenance organizations.',
      affectedAreas: ['Safety', 'Management', 'Risk Assessment'],
      referenceUrl: 'https://icao.int',
      daysUntilEffective: 165,
    },
    {
      id: 6,
      title: 'Digital Maintenance Records: Compliance Alert',
      authority: 'CAAK',
      type: 'COMPLIANCE_ALERT',
      severity: 'WARNING',
      effectiveDate: '2025-05-01',
      description: 'All maintenance records must be digitized and comply with new data protection standards.',
      affectedAreas: ['Records', 'Data Protection', 'IT Systems'],
      referenceUrl: 'https://caak.go.ug',
      daysUntilEffective: 104,
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'HIGH':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'WARNING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const getTypeIcon = (type) => {
    const icons = {
      NEW_REGULATION: <FileText className="w-5 h-5" />,
      AMENDMENT: <TrendingUp className="w-5 h-5" />,
      SAFETY_DIRECTIVE: <AlertCircle className="w-5 h-5" />,
      POLICY_CHANGE: <Clock className="w-5 h-5" />,
      GUIDANCE: <FileText className="w-5 h-5" />,
      COMPLIANCE_ALERT: <Bell className="w-5 h-5" />,
    };
    return icons[type] || <FileText className="w-5 h-5" />;
  };

  const filteredUpdates = activeFilter === 'all'
    ? updates
    : updates.filter(u => u.severity === activeFilter);

  const criticalCount = updates.filter(u => u.severity === 'CRITICAL').length;
  const updatesThisMonth = updates.filter(u => u.daysUntilEffective <= 30).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
              <CheckCircle className="w-4 h-4" />
              <span>Stay Compliant</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
              Regulatory <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">Compliance Tracker</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Stay ahead of the curve. Real-time tracking of aviation regulations, safety directives, and compliance requirements affecting Uganda's aerospace sector.
            </p>
          </div>
        </div>
      </section>

      {/* Alert Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <AlertTriangle className="w-8 h-8" />,
              label: 'Critical Updates',
              value: criticalCount,
              color: 'bg-red-100 text-red-600',
            },
            {
              icon: <Clock className="w-8 h-8" />,
              label: 'Effective This Month',
              value: updatesThisMonth,
              color: 'bg-orange-100 text-orange-600',
            },
            {
              icon: <CheckCircle className="w-8 h-8" />,
              label: 'Total Active Updates',
              value: updates.length,
              color: 'bg-blue-100 text-blue-600',
            },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className={`${stat.color} p-4 rounded-lg w-fit mb-4`}>
                {stat.icon}
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Updates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Regulatory Updates</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b">
          {['all', 'CRITICAL', 'HIGH', 'WARNING'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {filter === 'all' ? 'All Updates' : `${filter} Priority`}
            </button>
          ))}
        </div>

        {/* Updates List */}
        <div className="space-y-4">
          {filteredUpdates.map(update => (
            <div key={update.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-blue-600 mt-1">{getTypeIcon(update.type)}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{update.title}</h3>
                      <p className="text-gray-600 mb-3">{update.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {update.affectedAreas.map((area, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {area}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600"><strong>Authority:</strong> {update.authority}</span>
                        <span className={`text-gray-600 font-semibold ${update.daysUntilEffective < 30 ? 'text-red-600' : ''
                          }`}>
                          Effective in {update.daysUntilEffective} days
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getSeverityColor(update.severity)} whitespace-nowrap ml-4`}>
                    {update.severity}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-500">
                    Effective: {new Date(update.effectiveDate).toLocaleDateString()}
                  </span>
                  <div className="flex gap-2">
                    <a href={update.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 text-sm">
                      View Reference
                    </a>
                    <button className="text-gray-600 hover:text-gray-700 p-2 hover:bg-gray-100 rounded transition">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Resources */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Compliance Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'EASA Part-66 AME Requirements',
                description: 'Complete guide to European Aviation Safety Agency license requirements.',
                link: 'https://easa.europa.eu',
              },
              {
                title: 'CAAK Maintenance Regulations',
                description: 'Uganda Civil Aviation Authority maintenance standards and procedures.',
                link: 'https://caak.go.ug',
              },
              {
                title: 'ICAO Safety Management Systems',
                description: 'International Civil Aviation Organization SMS framework.',
                link: 'https://icao.int',
              },
              {
                title: 'GCAA Regulations',
                description: 'General Civil Aviation Authority compliance requirements.',
                link: 'https://gcaa.go.ug',
              },
            ].map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                  Visit Resource →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Setup */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-700 mb-6">
            Get automatic email notifications when new regulatory updates are published that affect your certification or role.
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            <Bell className="w-5 h-5" /> Set Up Notifications
          </Link>
        </div>
      </section>
    </div>
  );
}
