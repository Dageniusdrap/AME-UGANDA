import React from 'react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'New CAA Guidelines for EASA Module Conversions',
            excerpt: 'Understanding the key changes in the license conversion process for foreign license holders in Uganda.',
            date: 'Dec 15, 2024',
            category: 'Regulatory',
            author: 'Technical Committee'
        },
        {
            id: 2,
            title: 'Reflections on the Aviation Safety Summit',
            excerpt: 'Key takeaways from our annual gathering of maintenance professionals in Entebbe.',
            date: 'Nov 28, 2024',
            category: 'Events',
            author: 'Sarah N.'
        },
        {
            id: 3,
            title: 'The Future of Predictive Maintenance in East Africa',
            excerpt: 'How local airlines are adopting AI and data analytics to improve fleet reliability.',
            date: 'Nov 10, 2024',
            category: 'Technology',
            author: 'John Doe'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="bg-aviation-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Views</h1>
                    <p className="text-xl text-aviation-200 max-w-2xl mx-auto">
                        Updates, insights, and stories from the Aviation Engineers Uganda community.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content - Blog List */}
                        <div className="lg:col-span-2 space-y-12">
                            {posts.map((post) => (
                                <article key={post.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                                        <span className="bg-aviation-50 text-aviation-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-aviation-600 transition-colors">
                                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-900">By {post.author}</span>
                                        <Link href={`/blog/${post.id}`} className="text-aviation-600 font-semibold flex items-center hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Sidebar - Newsletter */}
                        <div className="space-y-8">
                            <div className="bg-aviation-800 text-white rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Mail className="w-6 h-6 text-aviation-300" />
                                        <h3 className="text-xl font-bold">The Aviation Engineers Newsletter</h3>
                                </div>
                                <p className="text-aviation-200 mb-6">
                                    Get the latest regulatory updates, job alerts, and engineering insights delivered to your inbox monthly.
                                </p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-aviation-400"
                                    />
                                    <button className="w-full bg-aviation-500 hover:bg-aviation-400 text-white font-bold py-3 rounded-lg transition-colors">
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-xs text-aviation-400 mt-4 text-center">
                                    No spam, unsubscribe anytime.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                                <ul className="space-y-3">
                                    {['Regulatory Updates', 'Events', 'Technology', 'Member Stories', 'Safety Alerts'].map(cat => (
                                        <li key={cat}><a href="#" className="text-gray-600 hover:text-aviation-600 flex items-center justify-between group">
                                            <span>{cat}</span>
                                            <span className="bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full text-xs group-hover:bg-aviation-50 group-hover:text-aviation-600">3</span>
                                        </a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
