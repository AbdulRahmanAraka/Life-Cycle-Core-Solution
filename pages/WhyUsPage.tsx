
import React from 'react';
import { Link } from 'react-router-dom';

const WhyUsPage: React.FC = () => {
  const points = [
    {
      icon: 'fa-user-tie',
      title: 'Expert-Led PLM & Engineering Focus',
      desc: 'Lifecycle Core Solutions is led by professionals with strong hands-on experience in PLM and engineering IT environments.',
      features: [
        'Deep understanding of engineering workflows',
        'Practical, implementation-focused decisions',
        'Solutions designed for real operational use, not theory'
      ],
      note: 'We speak the language of both engineering and IT, ensuring better alignment across teams.'
    },
    {
      icon: 'fa-bullseye',
      title: 'Practical & Outcome-Driven Approach',
      desc: 'We follow a business-first mindset, similar to leading PLM consulting firms.',
      features: [
        'Solving real business problems',
        'Improving system usability and adoption',
        'Delivering measurable outcomes'
      ],
      note: 'We avoid unnecessary complexity and ensure solutions are aligned with your operational goals.'
    },
    {
      icon: 'fa-rocket',
      title: 'Strong PLM & Digital Transformation Expertise',
      desc: 'We bring experience across leading PLM platforms and enterprise systems, supporting organizations at different stages of their digital journey.',
      features: [
        'Reduce PLM implementation risks',
        'Improve data consistency and process efficiency',
        'Enable digital continuity across systems'
      ],
      note: 'We ensure technology investments deliver long-term value.'
    }
  ];

  const advantages = [
    'Expert-led PLM consulting',
    'Practical and scalable solutions',
    'Clear communication and transparency',
    'Strong engineering and IT alignment',
    'Focus on long-term digital continuity'
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">Why Choose LCS</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl">
            Engineering expertise meets business value
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="mb-20 text-center reveal active">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight" style={{ lineHeight: '1.4' }}>
            Engineering Digital Continuity,<br/>
            <span className="text-blue-600">Delivered with Purpose</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            At <strong className="text-slate-900">Lifecycle Core Solutions</strong>, we focus on delivering practical, scalable, and outcome-driven solutions that align engineering systems with business objectives.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {points.map((point, idx) => (
            <div key={idx} className="group reveal active" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border-2 border-slate-200 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col relative overflow-hidden">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <i className={`fas ${point.icon}`}></i>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                  {point.desc}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center">
                    <span className="w-6 h-1 bg-blue-600 mr-2"></span>
                    Value Proposition
                  </h4>
                  <ul className="space-y-3">
                    {point.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <i className="fas fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span className="text-slate-700 font-semibold text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl mt-auto">
                  <p className="text-sm font-bold leading-relaxed">{point.note}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Advantage Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-16 shadow-2xl reveal active relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/10"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Strategic Advantage
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Partner with a team that combines deep technical expertise with business acumen to deliver solutions that drive real value.
              </p>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                Get a Consultation
              </Link>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
              <ul className="space-y-6">
                {advantages.map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-300">
                      <i className="fas fa-arrow-right text-blue-400 group-hover/item:text-white transition-colors duration-300"></i>
                    </div>
                    <span className="text-lg font-bold text-slate-300 group-hover/item:text-white transition-colors duration-300 pt-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
