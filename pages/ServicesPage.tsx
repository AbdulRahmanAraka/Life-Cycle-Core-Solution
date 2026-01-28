
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'We help organizations modernize legacy engineering systems through structured digital transformation initiatives that ensure continuity.',
      points: [
        'Process Audit & Optimization',
        'Digital Roadmap & Architecture',
        'System Consolidation',
        'Workflow Automation'
      ],
      outcome: 'Seamless data flow and increased operational visibility.'
    },
    {
      id: 2,
      title: 'PLM Implementation & Support',
      description: 'End-to-end PLM deployment focusing on configuration over customization to ensure long-term stability.',
      points: [
        'Multi-CAD Integration',
        'BOM Management Setup',
        'Change Control Workflows',
        'Post-Launch Managed Support'
      ],
      outcome: 'A scalable PLM backbone aligned with engineering best practices.'
    },
    {
      id: 3,
      title: 'Managed PLM Services',
      description: 'Comprehensive administration and maintenance to reduce the burden on internal IT teams.',
      points: [
        '24/7 System Monitoring',
        'Performance Tuning',
        'Version Upgrades & Patching',
        'User Training & Onboarding'
      ],
      outcome: 'Maximized system uptime and high user adoption rates.'
    }
  ];

  return (
    <div className="bg-white pb-20">
      <div className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">Expert Services</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm md:text-right border-l-4 md:border-l-0 md:border-r-4 border-blue-600 pl-4 md:pl-0 md:pr-4">
            Engineering Digital Continuity
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 flex flex-col lg:flex-row gap-24">
        <div className="lg:w-2/3">
          <div className="mb-24 reveal active">
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Driving Efficiency Across the <span className="text-blue-600">Product Lifecycle</span></h2>
            <p className="text-slate-600 text-2xl leading-relaxed font-medium">We provide practical, engineering-focused services that solve complex technical challenges.</p>
          </div>

          <div className="space-y-32">
            {services.map((service) => (
              <div key={service.id} className="relative reveal active">
                <div className="flex items-center space-x-6 mb-10 group">
                  <div className="w-2 h-16 bg-blue-600 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  <h3 className="text-4xl font-black text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-500 mb-12 italic text-xl border-l-2 border-blue-100 pl-8">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-gray-100">
                    <h4 className="font-bold text-slate-900 mb-8 flex items-center uppercase tracking-widest text-xs">
                      <span className="w-2 h-8 bg-blue-600 mr-4 block"></span> Key Focus
                    </h4>
                    <ul className="space-y-6">
                      {service.points.map((p, i) => (
                        <li key={i} className="flex items-start space-x-4">
                          <i className="fas fa-check-circle text-blue-500 mt-1"></i>
                          <span className="text-slate-700 font-black text-lg">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center p-10 bg-blue-600 text-white rounded-[2.5rem] shadow-xl">
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-xs opacity-80">Outcome</h4>
                    <p className="text-2xl font-black">{service.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-40 space-y-12 reveal active">
            <div className="bg-blue-50 p-12 rounded-[3.5rem] border border-blue-100 shadow-xl">
              <h4 className="text-2xl font-black text-slate-900 mb-8">Ready to modernize?</h4>
              <p className="text-slate-600 mb-10 text-lg">Our experts are ready to analyze your current systems at no cost.</p>
              <Link to="/contact" className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl text-center btn-refined shimmer-effect block">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
