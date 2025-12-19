'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, CalendarCheck, User, CheckCircle } from 'lucide-react';

export default function EventDetailsPage() {
    const params = useParams();
    const { id } = params;

    // Mock data sharing the same structure as the main events listing
    // In a real app, this would come from an API or database
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
            description: 'Join industry leaders, regulators, and engineers for the premier aviation safety event in East Africa. Keynotes on SMS implementation, human factors, and the future of African aviation safety. This summit brings together stakeholders from across the continent to discuss pressing safety challenges and innovative solutions.',
            agenda: [
                { time: '09:00 AM', title: 'Opening Ceremony & Keynote' },
                { time: '10:30 AM', title: 'Panel: SMS Implementation Challenges' },
                { time: '12:00 PM', title: 'Networking Lunch' },
                { time: '01:30 PM', title: 'Workshop: Human Factors in Maintenance' },
                { time: '03:30 PM', title: 'Closing Remarks & Awards' }
            ],
            price: '$150 (Members) / $250 (Non-members)',
            organizer: 'AEU Technical Committee'
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
            description: 'Hands-on training session covering the latest glass cockpit technologies and troubleshooting procedures for modern airliners. Ideal for B1/B2 licensed engineers looking to upgrade their skills.',
            agenda: [],
            price: 'UGX 200,000',
            organizer: 'AEU Training Dept'
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
            agenda: [],
            price: 'Free for Members',
            organizer: 'AEU Secretariat'
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
            agenda: [],
            price: 'UGX 100,000',
            organizer: 'AEU Technical Committee'
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
            agenda: [],
            price: 'Free',
            organizer: 'AEU Legal Dept'
        },
    ];

    const event = events.find(e => e.id === Number(id));

    if (!event) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-24 pb-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
                    <p className="text-gray-600 mb-6">The event you are looking for does not exist.</p>
                    <Link href="/events" className="text-aviation-600 font-bold hover:underline">Back to All Events</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">

            {/* Back Link */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link href="/events" className="inline-flex items-center text-gray-500 hover:text-aviation-600 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

                    {/* Hero Image */}
                    <div className="h-64 md:h-96 relative">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="bg-aviation-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block shadow-lg">
                                {event.type}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white shadow-sm mb-2">{event.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium">
                                <span className="flex items-center"><CalendarCheck className="w-5 h-5 mr-2" /> {event.date}</span>
                                <span className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> {event.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0">
                        {/* Main Content */}
                        <div className="md:col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">About this Event</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {event.description}
                            </p>

                            {event.agenda && event.agenda.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Agenda</h3>
                                    <div className="space-y-4">
                                        {event.agenda.map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <span className="font-bold text-aviation-600 whitespace-nowrap">{item.time}</span>
                                                <span className="text-gray-800 font-medium">{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Info */}
                        <div className="md:col-span-1 bg-slate-50 p-8 md:p-12">
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Event Details</h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-1">Date & Time</label>
                                        <p className="text-gray-900 font-medium flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-aviation-500" />
                                            {event.time}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-1">Venue</label>
                                        <p className="text-gray-900 font-medium flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-aviation-500" />
                                            {event.venue}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-1">Organizer</label>
                                        <p className="text-gray-900 font-medium flex items-center gap-2">
                                            <User className="w-4 h-4 text-aviation-500" />
                                            {event.organizer}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-1">Price</label>
                                        <p className="text-xl font-bold text-aviation-700">
                                            {event.price}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-aviation-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-aviation-600/20 hover:bg-aviation-700 transition flex items-center justify-center gap-2 transform active:scale-95">
                                Register Now
                            </button>

                            <button className="w-full mt-4 bg-white border border-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                                <Share2 className="w-4 h-4" /> Share Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
