'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, BookOpen, CheckCircle, Calendar, Download, AlertCircle, Zap, Trophy, TrendingUp } from 'lucide-react';

export default function CertificationsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const certifications = [
    {
      id: 1,
      name: 'AME Category A License',
      body: 'CAAK / EASA',
      description: 'Aircraft Maintenance Engineer - Mechanical Systems',
      status: 'ACTIVE',
      issueDate: '2020-05-15',
      expiryDate: '2026-05-15',
      daysUntilExpiry: 510,
      icon: '✈️',
    },
    {
      id: 2,
      name: 'Type Rating - Boeing 737',
      body: 'EASA',
      description: 'Type-specific maintenance certification',
      status: 'ACTIVE',
      issueDate: '2021-08-20',
      expiryDate: '2025-08-20',
      daysUntilExpiry: 245,
      icon: '🔧',
    },
    {
      id: 3,
      name: 'Safety Management Systems Training',
      body: 'ICAO / CAAK',
      description: 'SMS & Risk Assessment Certification',
      status: 'ACTIVE',
      issueDate: '2023-02-10',
      expiryDate: '2026-02-10',
      daysUntilExpiry: 780,
      icon: '🛡️',
    },
  ];

  const cpdCourses = [
    {
      id: 1,
      name: 'Advanced Avionics Troubleshooting',
      provider: 'AME Training Academy',
      status: 'COMPLETED',
      hours: 40,
      completionDate: '2024-11-15',
      certificate: true,
    },
    {
      id: 2,
      name: 'Composite Material Repair & Inspection',
      provider: 'Aircraft Maintenance Training Center',
      status: 'IN_PROGRESS',
      hours: 30,
      startDate: '2025-01-10',
      progress: 45,
    },
    {
      id: 3,
      name: 'Human Factors in Aviation Maintenance',
      provider: 'ICAO Certified Provider',
      status: 'COMPLETED',
      hours: 16,
      completionDate: '2024-09-20',
      certificate: true,
    },
  ];

  const resources = [
    {
      id: 1,
      title: 'EASA Part-66 Compliance Guide',
      type: 'DOCUMENT',
      size: '2.4 MB',
      downloads: 245,
    },
    {
      id: 2,
      title: 'Type Rating Preparation Video Series',
      type: 'VIDEO',
      duration: '12 hours',
      downloads: 156,
    },
    {
      id: 3,
      title: 'CPD Hour Tracking Template',
      type: 'FORM',
      downloads: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-slate-900 to-sky-950"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-300 border border-sky-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
              <Award className="w-4 h-4" />
              <span>Excellence Verified</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
              Professional <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-200">Certifications</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Track your licenses, certifications, and continuous professional development. Maintain your competitive edge with our automated tracking and compliance tools.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'licenses', label: 'Licenses & Certifications', icon: '📜' },
              { id: 'cpd', label: 'Professional Development', icon: '📚' },
              { id: 'resources', label: 'Resources', icon: '📁' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-semibold border-b-2 transition flex items-center gap-2 ${activeTab === tab.id
                  ? 'text-aviation-600 border-aviation-600'
                  : 'text-gray-600 border-transparent hover:text-aviation-600'
                  }`}
              >
                <span className="text-lg">{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Your Professional Profile</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  label: 'Active Certifications',
                  value: '3',
                  color: 'bg-green-100 text-green-600',
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  label: 'CPD Hours (This Year)',
                  value: '120+',
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  label: 'Compliance Status',
                  value: 'Excellent',
                  color: 'bg-sky-100 text-sky-600',
                },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className={`${stat.color} p-3 rounded-lg w-fit mb-4`}>
                    {stat.icon}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Certification Expiry Tracker</h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                {certifications.map(cert => (
                  <div key={cert.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{cert.icon}</span>
                      <div>
                        <h4 className="font-bold">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.body}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${cert.daysUntilExpiry < 90 ? 'text-red-600' : 'text-green-600'}`}>
                        {cert.daysUntilExpiry < 90 ? '⚠️' : '✓'} {cert.daysUntilExpiry} days
                      </p>
                      <p className="text-xs text-gray-600">Expires {new Date(cert.expiryDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'licenses' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Your Licenses & Certifications</h2>
            <div className="space-y-4">
              {certifications.map(cert => (
                <div key={cert.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                      <p className="text-gray-600 mb-4">{cert.description}</p>
                      <div className="flex gap-6 text-sm">
                        <span className="text-gray-600"><strong>Issuing Body:</strong> {cert.body}</span>
                        <span className="text-gray-600"><strong>Issued:</strong> {new Date(cert.issueDate).toLocaleDateString()}</span>
                        <span className="text-gray-600"><strong>Expires:</strong> {new Date(cert.expiryDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(cert.daysUntilExpiry / 2190) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/sign-up" className="mt-8 inline-flex items-center gap-2 text-aviation-600 hover:text-aviation-700 font-semibold">
              Add New Certification
            </Link>
          </div>
        )}

        {activeTab === 'cpd' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Continuing Professional Development</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Hours This Year', value: '120', target: '120+' },
                { label: 'Courses Completed', value: '5', color: 'text-green-600' },
                { label: 'In Progress', value: '1', color: 'text-blue-600' },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  {stat.target && <p className="text-xs text-gray-500 mt-2">Target: {stat.target}</p>}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {cpdCourses.map(course => (
                <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{course.name}</h3>
                      <p className="text-gray-600 text-sm">{course.provider}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                      {course.status === 'COMPLETED' ? '✓ Completed' : 'In Progress'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{course.hours} hours</span>
                    {course.status === 'IN_PROGRESS' && (
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    )}
                    {course.certificate && (
                      <button className="text-aviation-600 hover:text-aviation-700 font-semibold flex items-center gap-1">
                        <Download className="w-4 h-4" /> Certificate
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-aviation-600 hover:text-aviation-700 font-semibold">
              Enroll in a Course
            </Link>
          </div>
        )}

        {activeTab === 'resources' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Professional Resources</h2>
            <div className="space-y-4">
              {resources.map(resource => (
                <div key={resource.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{resource.title}</h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size || resource.duration}</span>
                        <span>•</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                    <button className="bg-aviation-600 text-white p-3 rounded-lg hover:bg-aviation-700 transition">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="bg-aviation-100 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Certified, Stay Competitive</h2>
          <p className="text-gray-600 mb-6">
            Track your certifications, plan your professional development, and ensure compliance with international standards.
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-aviation-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-aviation-700 transition">
            Go to Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}
