
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    if (showDisclaimer) {
      const timer = setTimeout(() => {
        setShowDisclaimer(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [showDisclaimer]);

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Top Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-black text-white tracking-tight">About Us</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-20 py-16 bg-slate-100">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10 reveal active">
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
            <div className="bg-blue-50 p-8 rounded-[2rem] border-2 border-blue-200 shadow-lg">
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

          {/* Right Content - Core Methodology */}
          <div className="lg:w-1/2 reveal active">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 shadow-2xl h-full">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-2">Our Core Methodology</h3>
                <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: 'fa-search', title: 'Understand', desc: 'Deep analysis of business objectives, engineering processes, and system landscape.' },
                  { icon: 'fa-sliders-h', title: 'Define', desc: 'Clear roadmap, architecture, and implementation strategy aligned with client goals.' },
                  { icon: 'fa-rocket', title: 'Implement', desc: 'Robust execution with focus on quality, performance, and scalability.' },
                  { icon: 'fa-chart-line', title: 'Optimize & Support', desc: 'Continuous improvement, optimization, and long-term system stability.' }
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:bg-blue-500 transition-colors">
                      <i className={`fas ${m.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-2">{m.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-16 reveal active">
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Our Expertise
            </h2>
            <div className="h-1.5 w-32 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">
              Comprehensive solutions across the digital manufacturing ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-database',
                title: 'PDM / PLM',
                items: [
                  'CAD & product data management',
                  'Enterprise PLM platforms',
                  'Lifecycle & configuration control'
                ]
              },
              {
                icon: 'fa-industry',
                title: 'Digital Manufacturing',
                items: [
                  'Manufacturing planning & simulation',
                  'Process and production readiness',
                  'Robotics & shop-floor alignment'
                ]
              },
              {
                icon: 'fa-tools',
                title: 'MOM / MES',
                items: [
                  'Manufacturing operations management',
                  'Execution & shop-floor control'
                ]
              },
              {
                icon: 'fa-cloud',
                title: 'Industry 4.0 / IIoT',
                items: [
                  'Connected systems & machines',
                  'Data-driven operations',
                  'Custom IIOT platforms'
                ]
              },
              {
                icon: 'fa-lightbulb',
                title: 'Advanced Technologies',
                items: [
                  'AI / Machine Learning',
                  'Data & analytics',
                  'Blockchain solutions'
                ]
              },
              {
                icon: 'fa-project-diagram',
                title: 'Digital Thread',
                items: [
                  'End-to-end traceability',
                  'Cross-platform integration',
                  'Real-time data synchronization'
                ]
              }
            ].map((expertise, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] p-8 shadow-lg border-2 border-slate-200 hover:border-blue-500 transition-all duration-300 reveal active group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    <i className={`fas ${expertise.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{expertise.title}</h3>
                </div>
                <ul className="space-y-3">
                  {expertise.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <i className="fas fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                      <span className="text-slate-700 font-semibold text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Across Leading Global Organizations */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-16 reveal active">
            <h2 className="text-5xl font-black text-white mb-4">
              Experience Across Leading Global Organizations
            </h2>
            <div className="h-1.5 w-48 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Professional Horizontal Scrolling Logo Container */}
          <div className="relative overflow-hidden py-4">
            {/* Left Fade with professional gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade with professional gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none"></div>
            
            <div className="logo-scroll-container">
              <div className="logo-scroll-track">
                {/* First set of logos */}
                {[
                  { src: '/assets/volocopter.png', alt: 'Volocopter' },
                  { src: '/assets/honeywell.png', alt: 'Honeywell' },
                  { src: '/assets/mechronspike-new.png', alt: 'MechriSpike' },
                  { src: '/assets/kaartech.png', alt: 'KaarTech' },
                  { src: '/assets/qatarenergy.png', alt: 'Qatar Energy LNG' },
                  { src: '/assets/hindsight.png', alt: 'Hind Sight' },
                  { src: '/assets/engineering.png', alt: 'Engineering Company' }
                ].map((logo, i) => (
                  <div key={`logo1-${i}`} className="logo-card">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { src: '/assets/volocopter.png', alt: 'Volocopter' },
                  { src: '/assets/honeywell.png', alt: 'Honeywell' },
                  { src: '/assets/mechronspike-new.png', alt: 'MechriSpike' },
                  { src: '/assets/kaartech.png', alt: 'KaarTech' },
                  { src: '/assets/qatarenergy.png', alt: 'Qatar Energy LNG' },
                  { src: '/assets/hindsight.png', alt: 'Hind Sight' },
                  { src: '/assets/engineering.png', alt: 'Engineering Company' }
                ].map((logo, i) => (
                  <div key={`logo2-${i}`} className="logo-card">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            .logo-scroll-container {
              overflow: hidden;
              width: 100%;
            }
            
            .logo-scroll-track {
              display: flex;
              gap: 2rem;
              animation: scroll-logos 25s linear infinite;
              width: fit-content;
            }
            
            .logo-card {
              width: 260px;
              height: 128px;
              flex-shrink: 0;
              background: white;
              border-radius: 1rem;
              padding: 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 8px 30px rgba(0,0,0,0.12);
              transition: box-shadow 0.3s;
              border: 1px solid rgba(255,255,255,0.2);
            }
            
            .logo-card:hover {
              box-shadow: 0 8px 30px rgba(0,0,0,0.18);
            }
            
            @keyframes scroll-logos {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-260px * 7 - 2rem * 7));
              }
            }
            
            .logo-scroll-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Info Icon with Click Toggle */}
          <div className="mt-8 flex items-center justify-end gap-4 reveal active">
            <button 
              onClick={() => setShowDisclaimer(!showDisclaimer)}
              className="w-10 h-10 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-600 hover:border-slate-500 flex-shrink-0"
            >
              <i className="fas fa-info text-sm"></i>
            </button>
            
            {/* Disclaimer Text */}
            {showDisclaimer && (
              <div className="bg-slate-800/90 text-slate-200 text-xs md:text-sm leading-relaxed px-6 py-3 rounded-2xl shadow-2xl border border-slate-700 max-w-2xl animate-fade-in-up">
                <p className="font-semibold">
                  Logos represent organizations where our leadership team has gained professional experience. No partnership or endorsement is implied.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="container mx-auto px-4 lg:px-20 pb-24 pt-8 bg-slate-100">
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
