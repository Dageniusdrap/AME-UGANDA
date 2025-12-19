'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Plane, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const effectiveIsScrolled = isScrolled || !isHome;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b ${effectiveIsScrolled
                ? 'bg-white/90 backdrop-blur-md border-gray-200/50 shadow-sm py-3'
                : 'bg-transparent border-transparent py-5'
                }`}
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group" aria-label="Aviation Engineers Uganda Home">
                        <div className="w-10 h-10 bg-gradient-to-br from-aviation-600 to-aviation-800 rounded-xl flex items-center justify-center shadow-lg shadow-aviation-900/10 group-hover:shadow-aviation-600/20 group-hover:scale-105 transition-all duration-300">
                            <Plane className="w-6 h-6 text-white transform group-hover:-rotate-45 transition-transform duration-500" />
                        </div>
                        <div>
                            <h1 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${effectiveIsScrolled ? 'text-gray-900' : 'text-white'}`}>
                                Aviation Engineers Uganda
                            </h1>
                            <p className={`text-[9px] uppercase tracking-widest font-semibold transition-colors duration-300 ${effectiveIsScrolled ? 'text-aviation-600' : 'text-aviation-200'}`}>
                                Excellence in Aviation
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <NavLink href="/" active={pathname === '/'} scrolled={effectiveIsScrolled}>Home</NavLink>
                        <NavLink href="/about" active={pathname === '/about'} scrolled={effectiveIsScrolled}>About</NavLink>

                        {/* Membership Dropdown */}
                        <div className="group relative px-3 py-2">
                            <button className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${effectiveIsScrolled ? 'text-gray-600 hover:text-aviation-600' : 'text-white/90 hover:text-white'}`}>
                                <span>Membership</span>
                                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-1">
                                    <DropdownItem href="/member-protection" title="Benefits" desc="Insurance & Legal Support" />
                                    <DropdownItem href="/advocacy" title="Advocacy" desc="Representation & Rights" />
                                    <DropdownItem href="/jobs" title="Career Center" desc="Latest Job Opportunities" />
                                </div>
                            </div>
                        </div>

                        {/* Professional Dropdown */}
                        <div className="group relative px-3 py-2">
                            <button className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${effectiveIsScrolled ? 'text-gray-600 hover:text-aviation-600' : 'text-white/90 hover:text-white'}`}>
                                <span>Professional</span>
                                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-1">
                                    <DropdownItem href="/certifications" title="Certifications" desc="Track your CPD" />
                                    <DropdownItem href="/compliance" title="Compliance" desc="Standards & Regulations" />
                                    <DropdownItem href="/member-directory" title="Directory" desc="Find Professionals" />
                                </div>
                            </div>
                        </div>

                        <NavLink href="/blog" active={pathname === '/blog'} scrolled={effectiveIsScrolled}>News</NavLink>
                        <NavLink href="/contact" active={pathname === '/contact'} scrolled={effectiveIsScrolled}>Contact</NavLink>

                        <div className="flex items-center space-x-3 pl-6 ml-2 border-l border-gray-200/20">
                            <Link
                                href="/sign-in"
                                className={`text-sm font-medium hover:text-aviation-400 transition-colors ${effectiveIsScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                            >
                                Log In
                            </Link>
                            <Link
                                href="/sign-up"
                                className="bg-aviation-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-aviation-600/20 hover:bg-aviation-500 hover:shadow-aviation-500/40 hover:-translate-y-0.5 transition-all duration-300 transform"
                            >
                                Join Now
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ?
                            <X className={effectiveIsScrolled ? 'text-gray-900' : 'text-white'} /> :
                            <Menu className={effectiveIsScrolled ? 'text-gray-900' : 'text-white'} />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[48rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-6 space-y-2">
                    <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>

                    <div className="py-2">
                        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Membership</p>
                        <MobileNavLink href="/member-protection" onClick={() => setIsMenuOpen(false)}>Benefits</MobileNavLink>
                        <MobileNavLink href="/advocacy" onClick={() => setIsMenuOpen(false)}>Advocacy</MobileNavLink>
                        <MobileNavLink href="/jobs" onClick={() => setIsMenuOpen(false)}>Jobs</MobileNavLink>
                    </div>

                    <div className="py-2">
                        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Professional</p>
                        <MobileNavLink href="/certifications" onClick={() => setIsMenuOpen(false)}>Certifications</MobileNavLink>
                        <MobileNavLink href="/compliance" onClick={() => setIsMenuOpen(false)}>Compliance</MobileNavLink>
                        <MobileNavLink href="/member-directory" onClick={() => setIsMenuOpen(false)}>Directory</MobileNavLink>
                    </div>

                    <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)}>News</MobileNavLink>
                    <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>

                    <div className="pt-6 border-t border-gray-100 space-y-3 px-2">
                        <Link href="/sign-in" className="block text-center text-gray-600 font-medium py-2 hover:text-aviation-600">
                            Log In
                        </Link>
                        <Link href="/sign-up" className="block w-full bg-aviation-600 text-white text-center py-3 rounded-xl font-semibold shadow-lg hover:bg-aviation-700 transition-colors">
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children, active, scrolled }: { href: string; children: React.ReactNode; active: boolean; scrolled: boolean }) {
    return (
        <Link
            href={href}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active
                ? (scrolled ? 'text-aviation-600 bg-aviation-50' : 'text-white bg-white/10')
                : (scrolled ? 'text-gray-600 hover:text-aviation-600 hover:bg-aviation-50/50' : 'text-white/90 hover:text-white hover:bg-white/10')
                }`}
        >
            {children}
        </Link>
    );
}

function DropdownItem({ href, title, desc }: { href: string; title: string; desc: string }) {
    return (
        <Link href={href} className="block px-4 py-3 hover:bg-gray-50 transition-colors group">
            <p className="text-sm font-medium text-gray-900 group-hover:text-aviation-600">{title}</p>
            <p className="text-xs text-gray-500 group-hover:text-aviation-500/80">{desc}</p>
        </Link>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:text-aviation-600 hover:bg-aviation-50 rounded-lg transition-all"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
