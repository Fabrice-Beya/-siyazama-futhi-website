import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-tech-gradient-secondary text-white overflow-hidden min-h-screen flex items-center">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-tech-cyan rounded-lg opacity-20 float-animation transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-purple rounded-full opacity-20 float-animation-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-tech-green rounded-lg opacity-20 float-animation transform rotate-12"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-tech-cyan rounded-full opacity-30 float-animation-delayed"></div>
          <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-r from-tech-cyan to-tech-purple rounded-lg opacity-25 float-animation"></div>
        </div>

        {/* Particle System */}
        <div className="particles">
          <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '20%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ left: '30%', animationDelay: '4s' }}></div>
          <div className="particle" style={{ left: '40%', animationDelay: '6s' }}></div>
          <div className="particle" style={{ left: '50%', animationDelay: '8s' }}></div>
          <div className="particle" style={{ left: '60%', animationDelay: '10s' }}></div>
          <div className="particle" style={{ left: '70%', animationDelay: '12s' }}></div>
          <div className="particle" style={{ left: '80%', animationDelay: '14s' }}></div>
          <div className="particle" style={{ left: '90%', animationDelay: '16s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in">
              <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
                &gt; INITIALIZING DIGITAL_TRANSFORMATION.exe
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-tech-gradient">Empowering</span>
                <br />
                <span className="text-white">Digital Future</span>
                <br />
                <span className="text-tech-cyan">for Municipalities</span>
              </h1>
              <div className="text-2xl lg:text-3xl mb-8 font-semibold text-tech-green font-mono">
                &gt; Lending a helping hand
              </div>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
                We bridge the technology gap in local government with cutting-edge solutions that enhance service delivery, citizen engagement, and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services"
                  className="bg-tech-gradient text-white font-semibold px-8 py-4 rounded-lg hover:glow-cyan transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 neon-border"
                >
                  <span className="font-mono">&gt;</span> Explore Services
                </Link>
                <Link 
                  to="/contact"
                  className="bg-transparent border-2 border-tech-cyan text-tech-cyan font-semibold px-8 py-4 rounded-lg hover:bg-tech-cyan hover:text-white transition-all duration-300 text-lg glow-cyan"
                >
                  <span className="font-mono">&gt;</span> Start Project
                </Link>
              </div>
            </div>

            {/* Right Content - Tech Visualization */}
            <div className="relative slide-in-right">
              <div className="relative">
                {/* Main Tech Image */}
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Technology Network" 
                  className="rounded-2xl shadow-2xl glow-blue"
                />
                
                {/* Overlay Tech Elements */}
                <div className="absolute inset-0 bg-tech-gradient opacity-20 rounded-2xl"></div>
                
                {/* Floating Code Snippets */}
                <div className="absolute -top-4 -right-4 bg-gray-900 p-4 rounded-lg border border-tech-cyan glow-cyan">
                  <div className="font-mono text-tech-green text-sm">
                    <div>&gt; npm install future</div>
                    <div className="text-tech-cyan">&gt; deploying...</div>
                    <div className="text-white">&gt; success ✓</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gray-900 p-4 rounded-lg border border-tech-purple glow-purple">
                  <div className="font-mono text-tech-purple text-sm">
                    <div>const innovation = true;</div>
                    <div className="text-tech-cyan">if (innovation) </div>
                    <div className="text-white ml-4">transform();</div>
                    <div className="text-tech-cyan"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 tech-dots-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-mono">
              &gt; System.getStats()
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="fade-in tech-card p-6 rounded-xl bg-white glow-blue">
              <div className="text-5xl lg:text-6xl font-bold text-tech-gradient mb-2 font-mono">50+</div>
              <div className="text-gray-600 font-medium">Projects Deployed</div>
              <div className="text-tech-cyan text-sm font-mono mt-2">[ACTIVE]</div>
            </div>
            <div className="fade-in tech-card p-6 rounded-xl bg-white glow-cyan">
              <div className="text-5xl lg:text-6xl font-bold text-tech-gradient mb-2 font-mono">25+</div>
              <div className="text-gray-600 font-medium">Municipalities Connected</div>
              <div className="text-tech-green text-sm font-mono mt-2">[ONLINE]</div>
            </div>
            <div className="fade-in tech-card p-6 rounded-xl bg-white glow-purple">
              <div className="text-5xl lg:text-6xl font-bold text-tech-gradient mb-2 font-mono">99%</div>
              <div className="text-gray-600 font-medium">Uptime Achieved</div>
              <div className="text-tech-purple text-sm font-mono mt-2">[OPTIMAL]</div>
            </div>
            <div className="fade-in tech-card p-6 rounded-xl bg-white glow-blue">
              <div className="text-5xl lg:text-6xl font-bold text-tech-gradient mb-2 font-mono">24/7</div>
              <div className="text-gray-600 font-medium">Support Runtime</div>
              <div className="text-tech-cyan text-sm font-mono mt-2">[MONITORING]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 tech-circuit-bg opacity-5"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; ANALYZING COMPETITIVE_ADVANTAGES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-tech-gradient">Siyazama Futhi</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep public sector expertise with cutting-edge technology to deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 slide-in-left group neon-border hover:glow-blue">
              <div className="w-16 h-16 bg-tech-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-blue">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
                &gt; Lightning Fast Implementation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our agile methodology ensures rapid deployment without compromising quality. Get your solutions up and running in weeks, not months.
              </p>
              <div className="mt-4 font-mono text-tech-green text-sm">
                [DEPLOYMENT_SPEED: OPTIMIZED]
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 fade-in group neon-border hover:glow-cyan">
              <div className="w-16 h-16 bg-tech-gradient-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-cyan">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
                &gt; Proven Track Record
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With a proven track record of successful projects across South Africa, we understand the unique challenges facing local municipalities.
              </p>
              <div className="mt-4 font-mono text-tech-cyan text-sm">
                [SUCCESS_RATE: 99.9%]
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 slide-in-right group neon-border hover:glow-purple">
              <div className="w-16 h-16 bg-tech-gradient-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
                &gt; 24/7 Support & Maintenance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team ensures your systems run smoothly around the clock, with proactive monitoring and rapid response times.
              </p>
              <div className="mt-4 font-mono text-tech-purple text-sm">
                [MONITORING: ACTIVE]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Digital Network" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-tech-gradient-secondary opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; LOADING SERVICES_PORTFOLIO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-tech-gradient">Core Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored for the public sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 tech-card rounded-xl hover:glow-blue transition-all duration-300 border border-tech-cyan">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-cyan font-mono">
                &gt; Web Platforms
              </h3>
              <p className="text-gray-300 text-sm mb-4">Citizen portals and municipal management systems</p>
              <div className="font-mono text-tech-green text-xs">[STATUS: READY]</div>
            </div>

            <div className="group p-6 tech-card rounded-xl hover:glow-cyan transition-all duration-300 border border-tech-purple">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-purple font-mono">
                &gt; Mobile Apps
              </h3>
              <p className="text-gray-300 text-sm mb-4">iOS and Android applications for citizen engagement</p>
              <div className="font-mono text-tech-cyan text-xs">[STATUS: DEPLOYED]</div>
            </div>

            <div className="group p-6 tech-card rounded-xl hover:glow-purple transition-all duration-300 border border-tech-green">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-green font-mono">
                &gt; IoT Solutions
              </h3>
              <p className="text-gray-300 text-sm mb-4">Smart city infrastructure and monitoring systems</p>
              <div className="font-mono text-tech-purple text-xs">[STATUS: ACTIVE]</div>
            </div>

            <div className="group p-6 tech-card rounded-xl hover:glow-blue transition-all duration-300 border border-tech-cyan">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-cyan font-mono">
                &gt; AI & Analytics
              </h3>
              <p className="text-gray-300 text-sm mb-4">Data-driven insights and process automation</p>
              <div className="font-mono text-tech-green text-xs">[STATUS: LEARNING]</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center bg-tech-gradient text-white font-semibold px-8 py-4 rounded-lg hover:glow-cyan transition-all duration-300 shadow-lg hover:shadow-xl neon-border font-mono"
            >
              &gt; View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tech-gradient text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full opacity-10 float-animation pulse-tech"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-lg opacity-10 float-animation-delayed transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full opacity-20 float-animation"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; INITIATING TRANSFORMATION_PROTOCOL
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-mono">
              Ready to <span className="text-white">Transform</span> Your Municipality?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the growing number of municipalities leveraging technology to better serve their communities. 
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-lg hover:glow-cyan transition-all duration-300 text-lg shadow-lg hover:shadow-xl font-mono neon-border"
              >
                &gt; Initialize Contact
              </Link>
              <Link 
                to="/about"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-primary transition-all duration-300 text-lg font-mono"
              >
                &gt; Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 