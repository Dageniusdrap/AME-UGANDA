'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Calendar, Users, Award, BookOpen, Plane, CheckCircle, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ExternalLink, ShieldCheck, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  // Stats and data arrays remain...

  const stats = [
    { label: 'Active Members', value: '350+', icon: Users },
    { label: 'Certified Engineers', value: '200+', icon: Award },
    { label: 'Training Partners', value: '15+', icon: BookOpen },
    { label: 'Years of Service', value: '12+', icon: ShieldCheck },
  ];

  const upcomingEvents = [
    {
      title: 'Aviation Safety Summit 2025',
      date: 'May 24, 2025',
      location: 'Entebbe, Uganda',
      type: 'Conference',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Advanced Avionics Masterclass',
      date: 'June 15, 2025',
      location: 'Kampala Training Ctr',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Annual General Assembly',
      date: 'July 20, 2025',
      location: 'Sheraton Kampala',
      type: 'AGM',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-aviation-200">
      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop"
            alt="Aircraft Maintenance Hangar"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-4 mx-auto hover:bg-white/10 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-aviation-400 animate-pulse"></span>
              <span className="text-aviation-100 text-sm font-medium tracking-widest uppercase">The Voice of Ugandan Aviation</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aviation-300 via-white to-aviation-300 animate-gradient-x">
                Aviation.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Championing the rights of <span className="text-white font-medium">Aircraft Maintenance</span>, <span className="text-white font-medium">Aeronautical</span>, and <span className="text-white font-medium">Aerospace Engineers</span>.
              We stand for the prioritizing of local talent, fair benefits, and world-class standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center pt-8">
              <Link
                href="/sign-up"
                className="group relative px-8 py-4 bg-white text-aviation-900 rounded-full font-bold text-lg shadow-2xl shadow-aviation-500/20 hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join the Movement <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-aviation-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/advocacy"
                className="group px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 flex items-center"
              >
                Our Advocacy
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Mission & Features Bento Grid */}
      <section id="mission" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-aviation-600 font-bold tracking-widest uppercase text-xs mb-3">Our Core Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Local Talent. Global Standards.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are dedicated to ending the disparity in hiring and benefits between local and foreign engineers. Your expertise deserves recognition and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

            {/* Feature 1: The "Why" - Advocacy (Large) */}
            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2rem] bg-aviation-900 shadow-2xl transition-all duration-500 hover:shadow-aviation-900/30">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Engineers working" />
              </div>
              <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                <ShieldCheck className="w-14 h-14 text-aviation-400 mb-6" />
                <div>
                  <h4 className="text-3xl font-bold text-white mb-3">Priority for Ugandan Engineers</h4>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                    We challenge policies that favor foreign labor over qualified local professionals. We advocate for "First Right of Refusal" for Ugandan nationals in all engineering roles.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/advocacy" className="inline-flex items-center text-white font-semibold group-hover:text-aviation-300 transition-colors">
                    Read our Policy Paper <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2: Whistleblower / Report (Tall) */}
            <div className="md:col-span-1 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 flex flex-col relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-red-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-red-600">
                  <Shield className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Report Unfair Practices</h4>
                <p className="text-slate-600 mb-8 flex-grow">
                  witnessed unfair hiring? Denied benefits given to expatriates? Report it anonymously. We use this data to challenge employers and lobby the government.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">🔒 100% Anonymous</p>
                    <p className="text-xs text-slate-500">Your identity is protected.</p>
                  </div>
                  <Link href="/report" className="w-full py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/40 transition-all text-center block">
                    File a Report
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 3: Career Growth */}
            <div className="md:col-span-1 md:row-span-1 bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:border-aviation-100 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <Link href="/jobs" className="text-slate-400 hover:text-blue-600 transition-colors"><ExternalLink className="w-5 h-5" /></Link>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Career Acceleration</h4>
              <p className="text-slate-600 text-sm mb-4">Access premium job listings reserved for members before they go public.</p>
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3].map(i => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200" />
                ))}
                <div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">+12</div>
              </div>
            </div>

            {/* Feature 4: Certifications */}
            <div className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 shadow-xl text-white group overflow-hidden relative">
              <div className="absolute bottom-0 right-0 p-4 opacity-5">
                <Award className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-aviation-300">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Licensing & CPD</h4>
                <p className="text-slate-400 text-sm mb-6">Track your EASA/UCAA modules and maintenance experience logs.</p>
                <Link href="/certifications" className="text-aviation-300 font-semibold text-sm hover:text-white transition-colors flex items-center">
                  Open Portal <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-20 bg-aviation-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-aviation-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-aviation-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Membership Tiers</h2>
            <p className="text-lg text-slate-600">Choose the path that fits your career stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Student', price: '50K', period: 'UGX/year', features: ['Training Access', 'Event Discounts', 'Mentorship'], recommended: false },
              { title: 'Regular', price: '150K', period: 'UGX/year', features: ['Voting Rights', 'Full Certification Support', 'Job Portal Access', 'Legal Support'], recommended: true },
              { title: 'Senior', price: '100K', period: 'UGX/year', features: ['15+ Years Exp.', 'Leadership Roles', 'VIP Event Access'], recommended: false },
            ].map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${tier.recommended
                  ? 'bg-white shadow-2xl ring-2 ring-aviation-500 scale-105 z-10'
                  : 'bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1'
                  }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aviation-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wide mb-2">{tier.title}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-slate-900">{tier.price}</span>
                    <span className="ml-2 text-slate-500 font-medium">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-aviation-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${tier.recommended
                  ? 'bg-aviation-600 text-white hover:bg-aviation-700 shadow-lg shadow-aviation-200'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}>
                  Choose {tier.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Showcase */}
      <section id="events" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Events & Workshops</h2>
              <p className="text-lg text-slate-600">Stay ahead of the curve with our industry-leading seminars.</p>
            </div>
            <Link href="/events" className="hidden md:flex items-center font-bold text-aviation-600 hover:text-aviation-700 transition-colors mt-4 md:mt-0">
              View All Events <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="flex space-x-6 overflow-x-auto pb-8 snap-x">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[400px] snap-center bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-aviation-600 font-semibold text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-aviation-600 transition-colors">{event.title}</h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" /> {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-aviation-600 rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Aviation Engineers Uganda</span>
              </Link>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                The premier body for Aviation Engineers and Maintenance Professionals in Uganda. Promoting safety, standards, and professional growth.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-aviation-600 hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Membership', 'Events', 'News', 'Contact'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-aviation-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-aviation-500" /> Entebbe Int. Airport, <br />Kampala, Uganda</li>
                <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-aviation-500" /> +256 700 123 456</li>
                <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-aviation-500" /> connect@ameuganda.org</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2024 Aviation Engineers Uganda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
