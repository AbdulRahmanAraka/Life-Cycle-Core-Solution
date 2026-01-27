
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-14 w-auto flex items-center justify-center flex-shrink-0">
                  <img src="assets/logo-arrow.png" alt="LCS Logo" className="h-full w-auto block" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tighter leading-tight">LIFECYCLE CORE SOLUTIONS</h2>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">Engineering Digital Continuity</p>
                </div>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              We empower digital continuity through expert engineering and technology solutions. Partnering with organizations to deliver scalable transformation and optimize business-critical processes across the product lifecycle.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-blue-600/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Our Services</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-blue-600/30 pb-2 inline-block">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 text-sm hover:text-blue-400 transition-colors">
                <i className="fas fa-envelope text-blue-400"></i>
                <a href="mailto:contact@lifecyclecore.com">contact@lifecyclecore.com</a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-sm hover:text-blue-400 transition-colors">
                <i className="fas fa-globe text-blue-400"></i>
                <a href="https://lifecyclecore.com" target="_blank" rel="noopener noreferrer">www.lifecyclecore.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lifecycle Core Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
