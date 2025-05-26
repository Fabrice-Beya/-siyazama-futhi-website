import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Siyazama Futhi
          </h2>
          <div className="text-2xl lg:text-3xl mb-4 font-semibold text-brand-primary">
            Lending a helping hand
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a cutting-edge technology consultancy dedicated to transforming local government operations through innovative digital solutions.
          </p>
        </div>

        {/* Mission & Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To modernize municipal operations through intelligent building management, energy monitoring systems, and digital transformation solutions that reduce costs, improve efficiency, and create smarter cities.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-brand-primary mr-2">✓</span>
                  Municipal facility energy optimization
                </li>
                <li className="flex items-center">
                  <span className="text-brand-primary mr-2">✓</span>
                  Building management automation
                </li>
                <li className="flex items-center">
                  <span className="text-brand-primary mr-2">✓</span>
                  Digital process transformation
                </li>
                <li className="flex items-center">
                  <span className="text-brand-primary mr-2">✓</span>
                  Smart city monitoring solutions
                </li>
              </ul>
            </div>
          </div>

          <div className="relative slide-in-right">
            <img 
              src="/image.png" 
              alt="Team Collaboration" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Innovation Lab */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gray-900 opacity-95"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
          <div className="relative z-10 py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  🚀 Innovation in Action
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge technologies we're implementing to revolutionize municipal services
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Innovation 1 */}
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold text-white mb-3">Energy Monitoring</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Real-time energy consumption tracking for municipal facilities with automated reporting and optimization recommendations.
                  </p>
                  <div className="mt-4 text-xs text-green-300 font-semibold">
                    ↗ 30% energy cost reduction
                  </div>
                </div>

                {/* Innovation 2 */}
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">🏢</div>
                  <h4 className="text-xl font-bold text-white mb-3">Building Management</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Integrated HVAC, lighting, and security systems with centralized control and predictive maintenance alerts.
                  </p>
                  <div className="mt-4 text-xs text-blue-300 font-semibold">
                    ↗ 50% maintenance efficiency
                  </div>
                </div>

                {/* Innovation 3 */}
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">📋</div>
                  <h4 className="text-xl font-bold text-white mb-3">Process Digitization</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Converting manual paperwork and workflows into streamlined digital processes with automated approvals and tracking.
                  </p>
                  <div className="mt-4 text-xs text-purple-300 font-semibold">
                    ↗ 80% faster processing
                  </div>
                </div>

                {/* Innovation 4 */}
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">🌆</div>
                  <h4 className="text-xl font-bold text-white mb-3">Smart City Monitoring</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    IoT sensors and dashboards for traffic flow, air quality, waste management, and infrastructure health monitoring.
                  </p>
                  <div className="mt-4 text-xs text-yellow-300 font-semibold">
                    ↗ Real-time city insights
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-12">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-gray-300 text-lg">Ready to innovate your municipality?</span>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore Solutions →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 