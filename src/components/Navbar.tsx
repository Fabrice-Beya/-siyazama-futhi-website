import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src={`${process.env.PUBLIC_URL}/logo.png`} 
              alt="Siyazama Futhi Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-primary">
                Siyazama Futhi
              </span>
              <span className="text-xs text-gray-500 -mt-1">Lending a helping hand</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-brand-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-brand-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-brand-primary"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-red-800 hover:shadow-lg transition-all duration-200 shadow-md"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="font-medium transition-colors duration-200 text-gray-700 hover:text-brand-primary text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-medium transition-colors duration-200 text-gray-700 hover:text-brand-primary text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-medium transition-colors duration-200 text-gray-700 hover:text-brand-primary text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-red-800 transition-all duration-200 shadow-md text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 