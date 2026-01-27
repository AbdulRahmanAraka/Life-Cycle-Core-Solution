
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  const iconHeight = scrolled ? 'h-12' : 'h-20';
  const textSize = scrolled ? 'scale-90 origin-left' : 'scale-100 origin-left';

  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className={`${iconHeight} transition-all duration-500 flex items-center justify-center`}>
        <img src="assets/logo.png" alt="LCS Logo" className="h-full w-auto block" />
      </div>
      
    </div>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why LCS', path: '/why-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="hover:opacity-90 transition-opacity"><Logo scrolled={isScrolled} /></Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-wide transition-all nav-link-underline relative ${
                isActive(link.path) ? 'text-blue-600 nav-link-active' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-7 py-3 rounded-lg font-bold text-sm btn-refined shimmer-effect"
          >
            Get a Free Consultation
          </Link>
        </nav>

        <button className="lg:hidden text-slate-600 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <div className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700">{link.name}</Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold">Consultation</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
