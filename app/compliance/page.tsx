'use client';

import { Shield, Globe, Book, ExternalLink, Scale, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CompliancePage() {
  const resourceCategories = [
    {
      title: "Regulatory Authorities",
      description: "Direct access to national and international aviation safety regulators.",
      icon: Shield,
      color: "text-blue-600 bg-blue-50",
      links: [
        { name: "Uganda Civil Aviation Authority (UCAA)", url: "https://caa.go.ug" },
        { name: "European Union Aviation Safety Agency (EASA)", url: "https://www.easa.europa.eu" },
        { name: "Federal Aviation Administration (FAA)", url: "https://www.faa.gov" },
        { name: "Civil Aviation Safety Authority (Australia)", url: "https://www.casa.gov.au" }
      ]
    },
    {
      title: "International Bodies",
      description: "Global organizations setting the standards for air transport and safety.",
      icon: Globe,
      color: "text-indigo-600 bg-indigo-50",
      links: [
        { name: "ICAO Strings & Annexes", url: "https://www.icao.int" },
        { name: "IATA Standards", url: "https://www.iata.org" },
        { name: "Aircraft Engineers International (AEI)", url: "https://airengineers.org" },
        { name: "African Civil Aviation Commission", url: "https://afcac.org" }
      ]
    },
    {
      title: "Legal & Standards",
      description: "Official legislation, UCAA regulations, and technical guidance material.",
      icon: Scale,
      color: "text-amber-600 bg-amber-50",
      links: [
        { name: "Civil Aviation (Airworthiness) Regulations", url: "#" },
        { name: "The Civil Aviation Authority Act", url: "#" },
        { name: "UCAA Technical Guidance Materials", url: "#" },
        { name: "Personnel Licensing (PEL) Guidelines", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2bg-aviation-50 rounded-2xl mb-4">
            <Shield className="w-8 h-8 text-aviation-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Standards & <span className="text-aviation-600">Compliance</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Navigate the complex world of aviation regulations. Access designated industry links,
            regulatory portals, and legal standards essential for maintaining airworthiness in Uganda.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {resourceCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {category.description}
                </p>

                <ul className="space-y-4">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-aviation-50 border border-slate-100 hover:border-aviation-100 transition-all duration-200"
                      >
                        <span className="text-sm font-semibold text-slate-700 group-hover:text-aviation-700 truncate mr-2">
                          {link.name}
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-aviation-500 shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Notice */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>
            Links are provided for convenience. Aviation Engineers Uganda is not responsible for the content of external websites.
            <br />
            Always verify regulations with the <a href="https://caa.go.ug" className="text-aviation-600 hover:underline">Uganda Civil Aviation Authority</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
