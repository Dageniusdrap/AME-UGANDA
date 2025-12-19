'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Shield, Briefcase, AlertCircle, Users, FileText, CheckCircle, Phone, Mail, ExternalLink } from 'lucide-react';

export default function MemberProtectionPage() {
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const benefits = [
    {
      id: 'health',
      name: 'Comprehensive Health Insurance',
      type: 'HEALTH_INSURANCE',
      provider: 'AAR Health Services',
      description: 'Coverage for you and your family at competitive rates.',
      details: 'Inpatient, outpatient, dental, and vision coverage. Up to 3 dependents covered.',
      contactEmail: 'health@aarhealth.ug',
      phone: '+256 701 123 456',
      icon: '🏥',
    },
    {
      id: 'life',
      name: 'Life Insurance Protection',
      type: 'LIFE_INSURANCE',
      provider: 'Pearl Insurance Uganda',
      description: 'Secure your family\'s future with our group life insurance.',
      details: '2x-5x annual salary coverage. Waiver of premium on disability.',
      contactEmail: 'group@pearlugandaq.com',
      phone: '+256 703 456 789',
      icon: '🛡️',
    },
    {
      id: 'liability',
      name: 'Professional Liability Insurance',
      type: 'PROFESSIONAL_LIABILITY',
      provider: 'Crusaders Insurance',
      description: 'Protection against professional negligence claims.',
      details: 'Coverage up to UGX 500M for professional liability exposure.',
      contactEmail: 'prof@crusaders.ug',
      phone: '+256 702 987 654',
      icon: '⚖️',
    },
    {
      id: 'legal',
      name: 'Legal Support & Representation',
      type: 'LEGAL_SUPPORT',
      provider: 'Aviation Engineers Uganda Legal Team',
      description: 'Expert legal support for employment disputes and workplace issues.',
      details: '24/7 legal hotline. Free initial consultation. Member-subsidized rates.',
      contactEmail: 'legal@ame-uganda.org',
      phone: '+256 701 555 666',
      icon: '📋',
    },
    {
      id: 'training',
      name: 'Training & Development Subsidy',
      type: 'TRAINING_SUBSIDY',
      provider: 'Aviation Engineers Uganda',
      description: 'Get up to 30% discount on approved training programs.',
      details: 'Subsidies for EASA courses, type ratings, and CPD programs.',
      contactEmail: 'training@ame-uganda.org',
      phone: '+256 701 777 888',
      icon: '📚',
    },
    {
      id: 'placement',
      name: 'Job Placement Services',
      type: 'JOB_PLACEMENT',
      provider: 'AME Career Services',
      description: 'Exclusive access to member-only premium job opportunities.',
      details: 'Resume review, interview coaching, and career counseling included.',
      contactEmail: 'careers@ame-uganda.org',
      phone: '+256 701 999 000',
      icon: '💼',
    },
    {
      id: 'peer',
      name: 'Peer Support Network',
      type: 'PEER_SUPPORT',
      provider: 'Aviation Engineers Uganda Community',
      description: 'Connect with experienced mentors and peer professionals.',
      details: 'Monthly networking events, mentorship program, online forums.',
      contactEmail: 'community@ame-uganda.org',
      phone: '+256 701 111 222',
      icon: '🤝',
    },
    {
      id: 'mentoring',
      name: 'Career Mentoring Program',
      type: 'CAREER_MENTORING',
      provider: 'Aviation Engineers Uganda',
      description: 'One-on-one mentoring from senior industry professionals.',
      details: '12-week structured mentoring program. Focus on career growth and leadership.',
      contactEmail: 'mentoring@ame-uganda.org',
      phone: '+256 701 333 444',
      icon: '👨‍🏫',
    },
  ];

  const protections = [
    {
      title: 'Fair Wages & Compensation',
      description: 'We advocate for minimum wage standards aligned with international best practices.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Safe Working Conditions',
      description: 'Your safety is paramount. We ensure employers meet international aviation safety standards.',
      icon: <AlertCircle className="w-6 h-6" />,
    },
    {
      title: 'Unfair Dismissal Protection',
      description: 'Legal support and advocacy if you face unjust termination.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Professional Recognition',
      description: 'We work to ensure your qualifications are recognized locally and internationally.',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Access to Continuous Learning',
      description: 'Subsidized access to training and professional development programs.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Workplace Disputes Resolution',
      description: 'Mediation and support for resolving workplace conflicts fairly.',
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
              <Shield className="w-4 h-4" />
              <span>Safety & Security First</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
              Member Protection <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">& Benefits</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              Aviation Engineers Uganda is committed to protecting the rights, safety, and professional interests of all members. Access exclusive benefits, legal shielding, and premium insurance programs designed for aviation professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Member Protections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">How We Protect Our Members</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protections.map((protection, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-green-600 mb-4">{protection.icon}</div>
              <h3 className="text-lg font-bold mb-2">{protection.title}</h3>
              <p className="text-gray-600">{protection.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Exclusive Member Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map(benefit => (
              <div
                key={benefit.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => setExpandedBenefit(expandedBenefit === benefit.id ? null : benefit.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{benefit.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold">{benefit.name}</h3>
                        <p className="text-sm text-gray-600">{benefit.provider}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>

                  {expandedBenefit === benefit.id && (
                    <div className="border-t pt-4 mt-4">
                      <p className="text-gray-700 mb-4"><strong>Details:</strong> {benefit.details}</p>
                      <div className="space-y-2 text-sm">
                        <a href={`mailto:${benefit.contactEmail}`} className="flex items-center gap-2 text-aviation-600 hover:text-aviation-700">
                          <Mail className="w-4 h-4" /> {benefit.contactEmail}
                        </a>
                        <a href={`tel:${benefit.phone}`} className="flex items-center gap-2 text-aviation-600 hover:text-aviation-700">
                          <Phone className="w-4 h-4" /> {benefit.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <button className="mt-4 text-aviation-600 hover:text-aviation-700 font-semibold flex items-center gap-1">
                    {expandedBenefit === benefit.id ? 'Hide Details' : 'View Details'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Membership Benefits by Tier</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              name: 'Student',
              price: 'UGX 50K/year',
              benefits: ['Basic health', 'Networking', 'Discounted training'],
            },
            {
              name: 'Regular',
              price: 'UGX 200K/year',
              benefits: ['Full health coverage', 'Legal support', 'All benefits', 'Job placement'],
              featured: true,
            },
            {
              name: 'Senior',
              price: 'UGX 350K/year',
              benefits: ['Premium health', 'Dedicated legal', 'All benefits', 'Priority placement'],
            },
            {
              name: 'Lifetime',
              price: 'One-time: UGX 5M',
              benefits: ['All benefits', 'Lifetime access', 'Honorary status'],
            },
          ].map((tier, i) => (
            <div
              key={i}
              className={`border rounded-lg p-6 transition ${tier.featured ? 'bg-aviation-600 text-white border-aviation-600 shadow-lg' : 'bg-white border-gray-200'
                }`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className={`text-2xl font-bold mb-6 ${tier.featured ? 'text-aviation-100' : 'text-aviation-600'}`}>
                {tier.price}
              </p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Support */}
      <section className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-7xl mx-auto my-12 mx-4 sm:mx-6 lg:mx-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Member Support</h3>
            <p className="text-red-700 mb-4">
              If you're facing workplace issues, unfair treatment, or need urgent legal assistance, contact our emergency support line.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+256701234567" className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">
                Call +256 701 234 567
              </a>
              <a href="mailto:emergency@ame-uganda.org" className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-red-50 transition">
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Call */}
      <section className="bg-aviation-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Aviation Engineers Uganda Today</h2>
          <p className="text-xl text-aviation-100 mb-8">
            Become a member and access all these benefits, protections, and opportunities.
          </p>
          <Link href="/sign-up" className="inline-flex items-center gap-2 bg-white text-aviation-600 px-8 py-3 rounded-lg font-bold hover:bg-aviation-50 transition">
            Start Your Membership
          </Link>
        </div>
      </section>
    </div>
  );
}
