import React from 'react';
import { Users, Award, Target, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
    const leadership = [
        {
            name: 'John Doe',
            role: 'President',
            bio: 'Licensed AME with 20+ years of experience in heavy maintenance.',
            // Placeholder image or remove image if not available
        },
        {
            name: 'Jane Smith',
            role: 'Vice President',
            bio: 'Avionics specialist and training instructor at KAIA.',
        },
        {
            name: 'Michael Okello',
            role: 'Secretary General',
            bio: 'Dedicated to regulatory compliance and aviation safety advocacy.',
        },
        // Add more leaders
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="bg-aviation-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aviation Engineers Uganda</h1>
                    <p className="text-xl text-aviation-200 max-w-3xl mx-auto">
                        The professional body uniting Aviation Engineers and Maintenance Professionals in Uganda.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <Target className="w-8 h-8 text-aviation-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To promote the highest standards of safety, professionalism, and recognition for Aviation Engineers and Maintenance Professionals in Uganda through advocacy, education, and collaboration with regulatory bodies.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <ShieldCheck className="w-8 h-8 text-aviation-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To be the leading authority and voice for the aviation maintenance profession in East Africa, ensuring a safe and sustainable aviation industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                        <p className="text-lg text-gray-600">Meet the team dedicated to serving our members.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {leadership.map((leader, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-24 h-24 bg-aviation-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <Users className="w-10 h-10 text-aviation-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                                <p className="text-aviation-600 font-medium mb-4">{leader.role}</p>
                                <p className="text-gray-600">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History/Values potentially here */}
        </div>
    );
}
