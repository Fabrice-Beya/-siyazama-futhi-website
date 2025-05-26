import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-brand-gradient text-white overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full opacity-10 float-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full opacity-10 float-animation-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-10 float-animation"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white rounded-full opacity-10 float-animation-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering
            <span className="block text-white drop-shadow-lg">
              Digital Transformation
            </span>
            for Municipalities
          </h1>
          <div className="text-2xl lg:text-3xl mb-8 font-semibold text-orange-200 drop-shadow-md">
            Lending a helping hand
          </div>
          <p className="text-xl lg:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
            We bridge the technology gap in local government with cutting-edge solutions that enhance service delivery, citizen engagement, and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-lg hover:bg-orange-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-primary transition-all duration-300 text-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 