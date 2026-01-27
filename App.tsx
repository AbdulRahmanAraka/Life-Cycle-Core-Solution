import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

const ScrollRevealInitializer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Intersection Observer for scroll reveals
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

// Explicitly define props for PageTransitionWrapper to avoid 'children' property missing errors
interface PageTransitionWrapperProps {
  // Added optional modifier to 'children' to fix the error: Property 'children' is missing in type '{}'
  children?: React.ReactNode;
}

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="animate-zoom-in">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollRevealInitializer />
        <Header />
        <main className="flex-grow">
          {/* Ensure children are passed correctly to custom wrapper */}
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransitionWrapper>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;