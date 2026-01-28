
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
      description: 'We enable seamless integration between engineering platforms and enterprise applications to ensure data consistency.',
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
      description: 'We explore servers modernize systems with manufacturing operations to enable execution-driven decision-making and production visibility.',
      points: [
        'Multi-CAD Integration',
        'BOM Management Setup',
        'Change Control Workflows'
      ],
      outcome: 'A scalable PLM backbone aligned with engineering best practices.'
    },
    {
      id: 4,
      title: 'Digital Manufacturing & MOM Integration',
      description: 'We enable seamless integration between engineering platforms and enterprise applications to ensure data consistency.',
      points: [
        '24/7 System Monitoring',
        'Performance Tuning',
        'Version Upgrades & Patching',
        'User Training & Onboarding'
      ],
      outcome: 'Maximized system uptime and high user adoption rates.'
    },
    {
      id: 5,
      title: 'Enterprise Systems Integration',
      description: 'We enable seamless integration between engineering platforms and enterprise applications to ensure data consistency.',
      points: [
        'PLM-ERP Integration',
        'Enterprise Data Synchronization',
        'API & Middleware Enablement',
        'Legacy System Integration'
      ],
      outcome: 'Unified data flow across business-critical systems.'
    },
    {
      id: 6,
      title: 'Technology Advisory & Architecture',
      description: 'We provide independent, experience driven advisory services to help organizations make informed technology decisions.',
      points: [
        'Platform Evaluation & Selection',
        'Solution Architecture Design',
        'Scalability & Performance Planning',
        'Security & Compliance Review'
      ],
      outcome: 'Strategic clarity and confidence in technology investments.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Expert Services</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl">
            Comprehensive solutions for digital engineering transformation
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="text-center mb-20 reveal active">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-relaxed">
            Driving Efficiency Across the <span className="text-blue-600">Product Lifecycle</span>
          </h2>
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto">
            We provide practical, engineering-focused services that solve complex technical challenges while delivering measurable business value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {services.map((service, index) => (
            <div key={service.id} className="group reveal active" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border-2 border-slate-200 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col relative overflow-hidden">
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Key Focus Areas */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center">
                    <span className="w-6 h-1 bg-blue-600 mr-2"></span>
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <i className="fas fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span className="text-slate-700 font-semibold text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome Section */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl mt-auto">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-90">Strategic Outcome</h4>
                  <p className="text-base font-bold leading-relaxed">{service.outcome}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl reveal active relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Transform Your Operations?</h3>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Our experts are ready to analyze your current systems and recommend the right solutions at no cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
                Request a Consultation
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
