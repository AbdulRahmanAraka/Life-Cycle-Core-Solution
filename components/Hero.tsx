
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative tech-bg text-white py-32 lg:py-56 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8 opacity-0 animate-fade-in-up">
            Engineering<br />
            <span className="text-blue-500">Digital Continuity</span>
          </h1>
          <p className="text-lg lg:text-2xl text-blue-100 mb-12 leading-relaxed font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Empowering intelligent product lifecycle & engineering IT solutions that transform businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-black text-center transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Request a Consultation
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-black text-center transition-all duration-300 hover:scale-105"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
