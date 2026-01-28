
import React from 'react';
import { Link } from 'react-router-dom';
import { Industry } from '../types';

const IndustriesPage: React.FC = () => {
  const industries: Industry[] = [
    {
      id: 'mfg',
      title: 'Manufacturing',
      icon: 'fa-industry',
      challenges: [
        'Bill of Materials (BOM) accuracy',
        'Engineering change management',
        'Supplier collaboration',
        'New product introduction (NPI) efficiency'
      ],
      howWeHelp: [
        'PLM process standardization',
        'Controlled change management workflows',
        'Data consistency across lifecycle',
        'Improved engineering/supply chain alignment'
      ]
    },
    {
      id: 'auto',
      title: 'Automotive',
      icon: 'fa-car',
      challenges: [
        'Variant and configuration complexity',
        'Regulatory compliance and traceability',
        'Multi-tier supplier coordination',
        'Faster product development cycles'
      ],
      howWeHelp: [
        'Structured configuration workflows',
        'Integration between PLM, ERP, and CAD',
        'Lifecycle traceability and compliance',
        'Scalable global program solutions'
      ]
    },
    {
      id: 'aero',
      title: 'Aerospace & Defense',
      icon: 'fa-plane',
      challenges: [
        'Strict regulatory requirements',
        'Configuration and document control',
        'Long product lifecycles',
        'High data security requirements'
      ],
      howWeHelp: [
        'High-integrity PLM workflows',
        'Complex configuration management',
        'Long-term data archival strategies',
        'Secure multi-partner collaboration'
      ]
    },
    {
      id: 'heavy',
      title: 'Industrial Equipment',
      icon: 'fa-cogs',
      challenges: [
        'Large and complex assemblies',
        'Legacy engineering data fragmentation',
        'System integration gaps',
        'Performance at scale'
      ],
      howWeHelp: [
        'Stable and scalable implementations',
        'Complex data migration strategies',
        'Performance tuning for large models',
        'Long-term support and maintenance'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Industries</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-20 reveal active">
          <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Engineering-Driven <span className="text-blue-600">Expertise</span></h2>
          <p className="text-2xl text-slate-600 max-w-4xl leading-relaxed font-medium">
            We support industries where product complexity, data accuracy, and lifecycle control are critical to business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {industries.map((ind) => (
            <div key={ind.id} className="bg-slate-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm reveal active hover:shadow-xl transition-all duration-500">
              <div className="bg-white p-10 flex items-center space-x-8">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-4xl shadow-xl shadow-blue-600/20">
                  <i className={`fas ${ind.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{ind.title}</h3>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-1">Sector Expertise</p>
                </div>
              </div>
              <div className="p-12 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Common Challenges</h4>
                  <ul className="space-y-4">
                    {ind.challenges.map((c, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-600 font-bold text-sm">
                        <span className="text-blue-500">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-600/5 p-8 rounded-3xl border border-blue-600/10">
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-6">Our Impact</h4>
                  <ul className="space-y-4">
                    {ind.howWeHelp.map((h, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-900 font-black text-sm">
                        <i className="fas fa-check text-blue-600 mt-1"></i>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-slate-900 rounded-[4rem] p-16 lg:p-24 text-center text-white relative overflow-hidden reveal active">
          <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter relative z-10">Tailored Solutions for Your Industry</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
            <Link to="/contact" className="bg-blue-600 text-white px-14 py-6 rounded-2xl font-black text-2xl btn-refined shadow-2xl">
              Discuss Your Project
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
