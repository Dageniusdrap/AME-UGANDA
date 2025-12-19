import React from 'react';
import { Building2, Handshake, ExternalLink } from 'lucide-react';

export default function PartnersPage() {
    const partners = [
        {
            name: 'Uganda Civil Aviation Authority (UCAA)',
            type: 'Regulatory Body',
            description: 'The UCAA is responsible for the regulation of civil aviation in Uganda. We work closely to ensure our members stay compliant with the latest regulations.',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Uganda_Civil_Aviation_Authority_logo.png' // Utilizing a likely common URL or placeholder logic if blocked. 
            // I'll stick to text description if image fails, but using a generic placeholder if needed.
        },
        {
            name: 'Uganda Professional Pilots Association (UPPA)',
            type: 'Professional Association',
            description: 'Collaborating to improve aviation safety standards and professional development across flight and maintenance operations.',
            logo: null // Placeholder
        },
            {
            name: 'East African Aviation Academy',
            type: 'Training Partner',
            description: 'Providing subsidized training courses for Aviation Engineers Uganda members.',
            logo: null
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="bg-aviation-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
                    <p className="text-xl text-aviation-200 max-w-3xl mx-auto">
                        Collaboration is at the heart of aviation safety. We are proud to work with leading organizations to elevate industry standards.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="bg-aviation-50 p-4 rounded-xl mb-6">
                                    {partner.name.includes('UCAA') ? (
                                        <div className="w-16 h-16 flex items-center justify-center font-bold text-aviation-800 text-2xl border-4 border-aviation-200 rounded-full">UCAA</div>
                                    ) : (
                                        <Building2 className="w-12 h-12 text-aviation-600" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                                        {partner.type}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {partner.description}
                                    </p>
                                </div>
                                <button className="flex items-center text-aviation-600 font-semibold hover:text-aviation-800 transition">
                                    Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Become a Partner CTA */}
                    <div className="mt-20 bg-aviation-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <Handshake className="w-16 h-16 mx-auto mb-6 text-aviation-200" />
                            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                            <p className="text-lg text-aviation-100 mb-8 max-w-2xl mx-auto">
                                Interested in collaborating with the largest body of aviation engineers in Uganda?
                            </p>
                            <a href="/contact" className="bg-white text-aviation-600 px-8 py-3 rounded-lg font-bold hover:bg-aviation-50 transition">
                                Get in Touch
                            </a>
                        </div>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Building2 className="w-64 h-64" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
