
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const features = [
    { icon: 'fa-cog', title: 'PLM Implementation', desc: 'Expert deployment of Siemens Teamcenter, PTC Windchill, and more.' },
    { icon: 'fa-project-diagram', title: 'Digital Continuity', desc: 'Seamless data flow across engineering and manufacturing.' },
    { icon: 'fa-brain', title: 'Strategic Advisory', desc: 'Process-first consulting to align technology with business ROI.' },
    { icon: 'fa-shield-alt', title: 'Managed Services', desc: 'Robust support to ensure maximum system uptime.' }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* New Introduction Card */}
      <section className="bg-slate-100 py-6 relative z-10">
        <div className="container mx-auto px-4 -mt-32">
          <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-800 animate-scale-in hover-lift relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-600/5 animate-gradient opacity-50"></div>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center relative z-10">
              <span className="font-black text-blue-400 bg-blue-600/20 px-3 py-1 rounded-lg inline-block transform hover:scale-110 transition-transform duration-300">LCS</span>
              {' '}
              {`delivers intelligent digital engineering solutions that unify product data, manufacturing operations, and enterprise systems. With expertise in PLM, PDM, MOM, MRO, Industry 4.0 (IIoT), and AI/ML technologies, we help organizations streamline workflows, enhance data visibility, and build a scalable, resilient digital enterprise.`.split(' ').map((word, index) => {
                const isKeyword = ['PLM,', 'PDM,', 'MOM,', 'MRO,', 'Industry', '4.0', '(IIoT),', 'AI/ML'].includes(word);
                return (
                  <React.Fragment key={index}>
                    <span
                      className="word-reveal"
                      style={{ 
                        animationDelay: `${index * 0.05}s`,
                        color: isKeyword ? '#60a5fa' : '',
                        fontWeight: isKeyword ? 'bold' : 'normal'
                      }}
                    >
                      {word}
                    </span>
                    {' '}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Our Delivery Models Section */}
      <section className="py-12 bg-slate-100 relative overflow-hidden">
        {/* Animated floating circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-slate-900 tracking-tight animate-fade-in-up">
            Our <span className="animate-text-gradient">Delivery Models</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-16 rounded-full animate-fade-in-up animate-glow-pulse" style={{ animationDelay: '0.2s' }}></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project-Based Delivery Card */}
            <div className="group relative animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 h-full border-2 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-500 animate-pulse"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-600/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-float">
                    <i className="fas fa-briefcase text-blue-400 text-3xl"></i>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    Project-Based Delivery
                  </h3>
                  
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    End-to-end ownership of projects—from requirement analysis and solution design to implementation, testing, and deployment.
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Dedicated Teams Card */}
            <div className="group relative animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 h-full border-2 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-500 animate-pulse"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-600/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-bounce">
                    <i className="fas fa-users-cog text-blue-400 text-3xl"></i>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    Dedicated Teams (T&M / PODs)
                  </h3>
                  
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    Flexible engagement with dedicated domain experts, engineers, and developers for long-term programs, enhancements, and continuous delivery.
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Industry Solutions Section */}
      <section className="py-12 bg-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-800 relative overflow-hidden animate-scale-in hover-lift">
            {/* Animated background elements inside card */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-white tracking-tight animate-fade-in-up">
                Our <span className="animate-text-gradient">Industry Solutions</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full animate-fade-in-up animate-glow-pulse" style={{ animationDelay: '0.2s' }}></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {/* Engineering & Digital Systems */}
                <div className="group animate-fade-in-up stagger-1">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 h-full border border-blue-600/30 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/30 relative overflow-hidden hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-visible group-hover:bg-blue-600/30 transition-colors duration-300">
                        <i className="fas fa-database text-blue-400 text-2xl animate-icon-float group-hover:scale-125 transition-transform duration-300"></i>
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        Engineering<br />& Digital Systems
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        Design, implementation, and optimization of digital systems that support engineering, product data, and business processes.
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Digital Continuity */}
                <div className="group animate-fade-in-up stagger-2">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 h-full border border-blue-600/30 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/30 relative overflow-hidden hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-visible group-hover:bg-blue-600/30 transition-colors duration-300">
                        <i className="fas fa-project-diagram text-blue-400 text-2xl animate-icon-bounce group-hover:scale-125 transition-transform duration-300"></i>
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        Digital<br />Continuity
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        Seamless integration of data and workflows across engineering, manufacturing, operations, and enterprise systems.
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Technology Advisory */}
                <div className="group animate-fade-in-up stagger-3">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 h-full border border-blue-600/30 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/30 relative overflow-hidden hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-visible group-hover:bg-blue-600/30 transition-colors duration-300">
                        <i className="fas fa-brain text-blue-400 text-2xl animate-icon-float group-hover:scale-125 transition-transform duration-300"></i>
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        Technology<br />Advisory
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        Practical consulting to align technology, processes, and architecture with business goals and long-term scalability.
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* PLM Implementation */}
                <div className="group animate-fade-in-up stagger-4">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 h-full border border-blue-600/30 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/30 relative overflow-hidden hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-visible group-hover:bg-blue-600/30 transition-colors duration-300">
                        <i className="fas fa-window-maximize text-blue-400 text-xl animate-icon-bounce group-hover:scale-125 transition-transform duration-300"></i>
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        PLM<br />Implementation
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        Expert deployment of enterprise PLM solutions including Siemens Teamcenter, PTC Windchill, and other platforms.
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Managed Services */}
                <div className="group animate-fade-in-up stagger-5">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 h-full border border-blue-600/30 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/30 relative overflow-hidden hover:-translate-y-2 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-visible group-hover:bg-blue-600/30 transition-colors duration-300">
                        <i className="fas fa-shield-alt text-blue-400 text-2xl animate-icon-float group-hover:scale-125 transition-transform duration-300"></i>
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        Managed<br />Services
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        Proactive monitoring, maintenance, and support to ensure system stability, security, and continuous performance.
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="bg-slate-900 py-16 relative mx-auto container px-4 z-20 rounded-[4rem] shadow-2xl reveal active mt-12">
        <div className="grid md:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="text-white flex flex-col items-center text-center px-6 reveal active">
              <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 text-4xl border border-blue-600/20">
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3 className="font-black text-xl mb-4 tracking-tight">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="py-16 bg-slate-100 reveal active">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 rounded-[4rem] p-16 lg:p-24 text-center text-white shadow-2xl relative overflow-hidden group animate-gradient hover-lift">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter relative z-10 animate-fade-in-up group-hover:scale-105 transition-transform duration-500">
              Ready to optimize your<br /> <span className="inline-block group-hover:animate-pulse">product lifecycle?</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
              <Link to="/contact" className="bg-slate-900 text-white px-14 py-6 rounded-2xl font-black text-2xl btn-refined shadow-2xl hover:bg-slate-800 hover:scale-110 transition-all duration-300 animate-slide-in-left">
                Get Started
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white px-14 py-6 rounded-2xl font-black text-2xl transition-all backdrop-blur-md hover:scale-110 duration-300 animate-slide-in-right">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
