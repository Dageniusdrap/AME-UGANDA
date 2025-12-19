'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function BlogPostPage() {
    const params = useParams();
    const { id } = params;

    // Mock data sharing the same structure as the main blog listing
    const posts = [
        {
            id: 1,
            title: 'New CAA Guidelines for EASA Module Conversions',
            excerpt: 'Understanding key changes in the license conversion process.',
            content: `
            <p>The Civil Aviation Authority (CAA) of Uganda has recently released updated guidelines regarding the conversion of European Aviation Safety Agency (EASA) maintenance engineer licenses to local Ugandan licenses. This development comes as part of a broader effort to standardize licensing requirements across the East African region.</p>
            
            <h3>Key Changes</h3>
            <p>One of the most significant changes is the introduction of a streamlined verification process for EASA Part-66 license holders. Previously, applicants were required to undergo a full re-examination of certain modules. Under the new directive, a direct credit system has been implemented for modules that align with the Uganda Civil Aviation Regulations (UCARs).</p>
            
            <ul>
              <li><strong>Module 10 (Aviation Legislation):</strong> Applicants must still pass the local legislation exam to ensure familiarity with UCARs.</li>
              <li><strong>Experience Requirements:</strong> Validated experience logs from EASA-approved maintenance organizations (AMO) will now be accepted without requiring additional local supervision hours, provided they meet the specific category requirements.</li>
              <li><strong>Type Ratings:</strong> Type ratings endorsed on an EASA license can be transferred subject to a simplified practical assessment rather than a full type training course.</li>
            </ul>

            <h3>Impact on the Industry</h3>
            <p>These changes are expected to significantly reduce the administrative burden on returning engineers and expatriates working in Uganda. It also opens up more opportunities for Ugandan engineers who have trained abroad to integrate back into the local workforce.</p>

            <p>"This is a welcome development," says Eng. John Doe, President of AEU. "It harmonizes our standards with international best practices while ensuring safety remains paramount."</p>

            <p>Members are encouraged to review the full guidance document available in the Resources section of our member portal.</p>
          `,
            date: 'Dec 15, 2024',
            category: 'Regulatory',
            author: 'Technical Committee',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Reflections on the Aviation Safety Summit',
            excerpt: 'Key takeaways from our annual safety gathering in Entebbe.',
            content: `
            <p>Last month, Entebbe hosted the annual Aviation Safety Summit, bringing together over 200 professionals from across the continent. The theme, "Resilience in Maintenance," highlighted the critical role engineers play in aviation safety nets.</p>
            
            <h3>Safety Management Systems (SMS)</h3>
            <p>A recurring topic was the practical implementation of Safety Management Systems in small to medium-sized MROs. Speakers emphasized that SMS should not just be a paperwork exercise but a cultural shift. "Reporting errors without fear of retribution is the cornerstone of a safe maintenance environment," noted the keynote speaker from ICAO.</p>

            <h3>Human Factors</h3>
            <p>Workshops on human factors delved into the psychological aspects of maintenance errors. Fatigue management rosters and "dirty dozen" awareness campaigns were showcased as effective tools to mitigate risk.</p>

            <p>We look forward to next year's summit and continuing these vital conversations.</p>
          `,
            date: 'Nov 28, 2024',
            category: 'Events',
            author: 'Sarah N.',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop'

        },
        {
            id: 3,
            title: 'The Future of Predictive Maintenance in East Africa',
            excerpt: 'How local airlines are adopting AI for fleet reliability.',
            content: `
            <p>The aviation industry is on the brink of a digital revolution, and East African airlines are beginning to adopt predictive maintenance technologies that promise to slash downtime and costs.</p>
            
            <h3>Data-Driven Decisions</h3>
            <p>By leveraging real-time data from aircraft sensors, engineering teams can now predict component failures before they occur. This shift from reactive to proactive maintenance is a game-changer for fleet reliability.</p>

            <p>Local carriers like Uganda Airlines are exploring partnerships with OEMs to integrate these health monitoring systems. For the engineer, this means a shift in skills—interpreting data trends is becoming just as important as manual dexterity.</p>
          `,
            date: 'Nov 10, 2024',
            category: 'Technology',
            author: 'John Doe',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop'
        }
    ];

    const post = posts.find(p => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-24 pb-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
                    <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
                    <Link href="/blog" className="text-aviation-600 font-bold hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <div className="mb-8">
                    <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-aviation-600 font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to News & Views
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-aviation-100 text-aviation-700 px-3 py-1 rounded-full font-bold">{post.category}</span>
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-aviation-200 rounded-full flex items-center justify-center text-aviation-700 font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">Author</p>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12 aspect-video">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Content Body */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <div className="prose prose-lg prose-slate max-w-none prose-headings:text-aviation-900 prose-a:text-aviation-600 hover:prose-a:text-aviation-700 font-sans" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>

                {/* Footer / Share */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-8">
                    <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 font-medium">Tags:</span>
                        <div className="flex gap-2">
                            {['Aviation', 'Maintenance', 'Uganda'].map(tag => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition cursor-pointer">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600 font-medium flex items-center gap-2"><Share2 className="w-4 h-4" /> Share:</span>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"><Facebook className="w-4 h-4" /></button>
                            <button className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition"><Twitter className="w-4 h-4" /></button>
                            <button className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition"><Linkedin className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>

            </article>

            {/* Read Next Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Read Next</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {posts.filter(p => p.id !== Number(id)).slice(0, 2).map(nextPost => (
                        <Link key={nextPost.id} href={`/blog/${nextPost.id}`} className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition flex items-center gap-6">
                            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                                <img src={nextPost.image} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-aviation-600 uppercase mb-1 block">{nextPost.category}</span>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-aviation-700 transition-colors mb-2">{nextPost.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{nextPost.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
