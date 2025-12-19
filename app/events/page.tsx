'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight, Filter, Search, Users, Video } from 'lucide-react';

export default function EventsPage() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Conference', 'Workshop', 'Seminar', 'Webinar', 'AGM'];

    const events = [
        {
            id: 1,
            title: 'Aviation Safety Summit 2025',
            date: 'May 24, 2025',
            time: '09:00 AM - 05:00 PM',
            location: 'Entebbe, Uganda',
            venue: 'Imperial Resort Beach Hotel',
            type: 'Conference',
            image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop',
            description: 'Join industry leaders, regulators, and engineers for the premier aviation safety event in East Africa. keynotes on SMS implementation and human factors.',
            price: '$150 (Members) / $250 (Non-members)'
        },
        {
            id: 2,
            title: 'Advanced Avionics Masterclass',
            date: 'June 15, 2025',
            time: '10:00 AM - 04:00 PM',
            location: 'Kampala, Uganda',
            venue: 'AEU Training Center',
            type: 'Workshop',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
            description: 'Hands-on training session covering the latest glass cockpit technologies and troubleshooting procedures for modern airliners.',
            price: 'UGX 200,000'
        },
        {
            id: 3,
            title: 'Annual General Assembly',
            date: 'July 20, 2025',
            time: '02:00 PM - 06:00 PM',
            location: 'Kampala, Uganda',
            venue: 'Sheraton Kampala Hotel',
            type: 'AGM',
            image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop',
            description: 'The most important meeting of the year. Review of association performance, elections of new leadership, and strategic planning.',
            price: 'Free for Members'
        },
        {
            id: 4,
            title: 'Gas Turbine Engine Maintenance Seminar',
            date: 'August 10, 2025',
            time: '09:00 AM - 01:00 PM',
            location: 'Entebbe, Uganda',
            venue: 'AeroClub Entebbe',
            type: 'Seminar',
            image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop',
            description: 'Deep dive into preventative maintenance for PT6 and CFM56 engines. Led by manufacture representatives.',
            price: 'UGX 100,000'
        },
        {
            id: 5,
            title: 'Aviation Law & Regulations Update',
            date: 'September 05, 2025',
            time: '06:00 PM - 08:00 PM',
            location: 'Online',
            venue: 'Zoom Webinar',
            type: 'Webinar',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
            description: 'Stay compliant. A comprehensive review of recent UCAA and ICAO regulatory changes affecting maintenance personnel.',
            price: 'Free'
        },
    ];

    const filteredEvents = filter === 'All' ? events : events.filter(e => e.type === filter);

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-aviation-950"></div>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
                            <Calendar className="w-4 h-4" />
                            <span>Connect & Learn</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-200">Events</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                            Join workshops, conferences, and networking sessions designed to elevate your career and keep you compliant with industry standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-y border-gray-200 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                            <span className="text-sm font-bold text-gray-500 flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Filter by:
                            </span>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${filter === cat
                                            ? 'bg-aviation-600 text-white shadow-md shadow-aviation-200'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-aviation-500 focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredEvents.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map(event => (
                                <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/95 backdrop-blur-sm text-aviation-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                                {event.type}
                                            </span>
                                        </div>
                                        {event.type === 'Webinar' && (
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                                    <Video className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-aviation-50 text-aviation-700 rounded-lg px-3 py-1 text-center min-w-[60px]">
                                                <span className="block text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                                                <span className="block text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                                            </div>
                                            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                                {event.price.includes('Free') ? 'Free' : 'Ticketed'}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aviation-600 transition-colors line-clamp-2">
                                            {event.title}
                                        </h3>

                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-start text-gray-500 text-sm">
                                                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-aviation-400" />
                                                <span>{event.venue}, <span className="text-gray-400">{event.location}</span></span>
                                            </div>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Clock className="w-4 h-4 mr-2 flex-shrink-0 text-aviation-400" />
                                                <span>{event.time}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                            {event.description}
                                        </p>

                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-aviation-700">{event.price}</span>
                                            <Link href={`/events/${event.id}`} className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-aviation-600 transition-colors">
                                                Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Calendar className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">No events found</h3>
                            <p className="text-gray-500 mb-6">There are no upcoming events in this category yet.</p>
                            <button onClick={() => setFilter('All')} className="text-aviation-600 font-bold hover:underline">View all events</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-aviation-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
                    <p className="text-aviation-200 mb-8 text-lg">Subscribe to our event calendar to get notified about upcoming workshops, conferences, and training sessions.</p>

                    <form className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-aviation-400"
                        />
                        <button className="bg-aviation-500 hover:bg-aviation-400 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-aviation-400 text-sm mt-4">We respect your inbox. No spam.</p>
                </div>
            </section>
        </div>
    );
}
