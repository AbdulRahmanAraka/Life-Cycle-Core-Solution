
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Header Section */}
      <div className="bg-white py-12 border-b border-gray-50">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="flex items-center space-x-6">
            <div className="h-14 w-auto flex items-center justify-center">
              <img src="assets/logo.png" alt="LCS Logo" className="h-full w-auto block" />
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">About Us</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-3/5 space-y-10 reveal active">
            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Engineering<br />
              <span className="text-blue-600">Digital Continuity</span>
            </h2>
            
            <div className="space-y-6 text-slate-500 font-bold text-lg leading-relaxed">
              <p>
                <span className="text-slate-900">Lifecycle Core Solutions (LCS)</span> is a specialized technology consultancy focused on bridging the gap between engineering processes and digital system execution.
              </p>
              <p>
                We work with mid-to-large scale manufacturing organizations to modernize their engineering IT landscapes through specialized PLM strategy, implementation, and continuous optimization.
              </p>
            </div>

            {/* Core Values Box */}
            <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 max-w-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-black text-slate-900">Core Values</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Technical Precision & Scalability',
                  'Engineering Domain Expertise',
                  'Transparent Strategic Partnerships'
                ].map((val, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-900 font-bold">
                    <i className="fas fa-check-circle text-blue-600"></i>
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Dark Card */}
          <div className="lg:w-2/5 reveal active">
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
              <h4 className="text-xl font-bold tracking-[0.2em] mb-20 uppercase opacity-90">LIFECYCLE CORE SOLUTIONS</h4>
              
              <div className="mb-20 text-slate-700 text-8xl opacity-30">
                <i className="fas fa-handshake"></i>
              </div>

              {/* Glowing PLM Box */}
              <div className="w-full relative mt-auto">
                <div className="border border-cyan-500/50 rounded-2xl p-10 bg-slate-900/50 backdrop-blur-sm relative z-10">
                  <h5 className="text-6xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-4">PLM</h5>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-cyan-500 rounded-full"></div>)}
                  </div>
                </div>
                {/* Decorative border elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-lg"></div>
              </div>

              <p className="mt-8 text-xs text-slate-400 leading-relaxed max-w-[250px]">
                Mid-to-large scale manufacturing organizations. PLM implementation, strategy & optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-16 reveal active">
            <h2 className="text-4xl font-black text-slate-900 mb-4 inline-block relative">
              Our Core Methodology
              <div className="h-1.5 w-1/2 bg-blue-600 mx-auto mt-2 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-search', title: 'Understand', desc: 'Deep analysis of business objectives, engineering processes, and system landscape.' },
              { icon: 'fa-sliders-h', title: 'Define', desc: 'Clear roadmap, architecture, and implementation strategy aligned with client goals.' },
              { icon: 'fa-rocket', title: 'Implement', desc: 'Robust execution with focus on quality, performance, and scalability.' },
              { icon: 'fa-chart-line', title: 'Optimize & Support', desc: 'Continuous improvement, optimization, and long-term system stability.' }
            ].map((m, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-50 flex flex-col h-full reveal active">
                <div className="text-blue-600 text-3xl mb-8">
                  <i className={`fas ${m.icon}`}></i>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-6">{m.title}</h4>
                <p className="text-slate-500 font-bold text-sm leading-relaxed flex-grow">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="container mx-auto px-4 lg:px-20 pb-24">
        <div className="bg-blue-600 rounded-[3rem] py-20 px-12 text-center text-white relative overflow-hidden shadow-2xl reveal active">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-black mb-8">Ready to modernize?</h3>
            <p className="text-xl font-bold opacity-80 mb-12">
              Partner with LCS to ensure digital continuity across your product lifecycle.
            </p>
            <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl btn-refined shadow-2xl">
              Get Started
            </Link>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
