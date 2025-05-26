import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, gradient }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`${gradient} p-8 text-white`}>
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white text-opacity-90">{description}</p>
      </div>
      <div className="p-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Platforms & Portals",
      description: "Comprehensive digital platforms that transform how municipalities interact with citizens and manage operations.",
      features: [
        "Citizen service portals with online applications",
        "Municipal management dashboards",
        "Document management systems",
        "Payment processing integration",
        "Multi-language support",
        "Mobile-responsive design"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "Mobile Applications",
      description: "Native iOS and Android applications that bring municipal services directly to citizens' fingertips.",
      features: [
        "Cross-platform development (iOS & Android)",
        "Offline functionality for remote areas",
        "Push notifications for important updates",
        "GPS integration for location-based services",
        "Secure authentication and data protection",
        "Real-time service request tracking"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-green-600 to-emerald-700"
    },
    {
      title: "IoT Solutions",
      description: "Smart city infrastructure that enables real-time monitoring and automated management of municipal resources.",
      features: [
        "Smart water and electricity meters",
        "Environmental monitoring sensors",
        "Traffic management systems",
        "Waste management optimization",
        "Street lighting automation",
        "Predictive maintenance alerts"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-700"
    },
    {
      title: "AI & Data Analytics",
      description: "Advanced analytics and artificial intelligence solutions that provide actionable insights for better decision-making.",
      features: [
        "Predictive analytics for resource planning",
        "Automated report generation",
        "Citizen sentiment analysis",
        "Budget optimization algorithms",
        "Performance monitoring dashboards",
        "Machine learning for process improvement"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-orange-600 to-red-700"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Comprehensive technology solutions tailored for municipal excellence
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We offer a complete suite of technology solutions designed specifically for the unique needs of local municipalities. Our goal is to help you harness the power of technology to transform your operations and better serve your community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={index % 2 === 0 ? 'fade-in' : 'slide-in-right'}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We start by understanding your unique challenges, requirements, and goals through comprehensive consultation.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design & Planning</h3>
              <p className="text-gray-600">
                Our team creates detailed designs and project plans that align with your objectives and budget constraints.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development & Testing</h3>
              <p className="text-gray-600">
                We build and rigorously test your solution using agile methodologies to ensure quality and reliability.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deployment & Support</h3>
              <p className="text-gray-600">
                We deploy your solution and provide ongoing support, training, and maintenance to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB',
              'PostgreSQL', 'TypeScript', 'Flutter', 'TensorFlow', 'Kubernetes', 'Redis'
            ].map((tech, index) => (
              <div key={tech} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-lg font-semibold text-gray-800">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our technology solutions can transform your municipality and better serve your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Request a Consultation
              </Link>
              <Link 
                to="/about"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 