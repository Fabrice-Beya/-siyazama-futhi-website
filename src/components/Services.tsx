import React from 'react';

const Services: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored for the public sector
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300">
            <div className="w-16 h-16 bg-brand-gradient rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web Platforms</h3>
            <p className="text-gray-600 mb-4">
              Citizen portals and municipal management systems that streamline operations and improve service delivery.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Facility Management</li>
              <li>• Citizen Service Portals</li>
              <li>• Document Management</li>
              <li>• Online Payment Systems</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300">
            <div className="w-16 h-16 bg-brand-gradient rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
            <p className="text-gray-600 mb-4">
              iOS and Android applications that bring municipal services directly to citizens' fingertips.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Service Request Apps</li>
              <li>• Emergency Reporting</li>
              <li>• Bill Payment Apps</li>
              <li>• Community Engagement</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300">
            <div className="w-16 h-16 bg-brand-gradient rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">IoT Solutions</h3>
            <p className="text-gray-600 mb-4">
              Smart city infrastructure and monitoring systems for efficient resource management.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Smart Lighting Systems</li>
              <li>• Smart Water Management</li>
              <li>• Smart Traffic Management</li>
              <li>• Smart Environmental Sensors</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300">
            <div className="w-16 h-16 bg-brand-gradient rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Analytics</h3>
            <p className="text-gray-600 mb-4">
              Data-driven insights and process automation to optimize municipal operations.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Predictive Analytics</li>
              <li>• Process Automation</li>
              <li>• Performance Dashboards</li>
              <li>• Decision Support Systems</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16 fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Siyazama Futhi?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We combine deep public sector expertise with cutting-edge technology to deliver solutions that truly make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 fade-in">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast Implementation</h4>
            <p className="text-gray-600">
              Our agile methodology ensures rapid deployment without compromising quality. Get your solutions up and running in weeks, not months.
            </p>
          </div>

          <div className="text-center p-6 fade-in">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h4>
            <p className="text-gray-600">
              With over 50 successful projects across South Africa, we understand the unique challenges facing local municipalities.
            </p>
          </div>

          <div className="text-center p-6 fade-in">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">24/7 Support & Maintenance</h4>
            <p className="text-gray-600">
              Our dedicated support team ensures your systems run smoothly around the clock, with proactive monitoring and rapid response times.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-brand-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-800 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 