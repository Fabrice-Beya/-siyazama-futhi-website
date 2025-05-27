import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-tech-gradient-secondary text-white overflow-hidden py-20">
        {/* Tech Background */}
        <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 bg-tech-cyan rounded-lg opacity-20 float-animation transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-tech-purple rounded-full opacity-25 float-animation-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-tech-green rounded-lg opacity-20 float-animation transform rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; LOADING COMPANY_PROFILE.json
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-tech-gradient">Siyazama Futhi</span>
            </h1>
            <div className="text-2xl lg:text-3xl mb-8 font-semibold text-tech-green font-mono">
              &gt; Lending a helping hand
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a cutting-edge technology consultancy dedicated to transforming local government operations through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 tech-dots-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="slide-in-left">
              <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
                &gt; MISSION_STATEMENT.execute()
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-mono">
                Our <span className="text-tech-gradient">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the digital divide in local government by providing innovative, scalable, and user-friendly technology solutions that enhance service delivery and citizen engagement.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg neon-border">
                <div className="font-mono text-tech-green text-sm mb-2">
                  [CORE_VALUES]
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-tech-cyan mr-2">▶</span>
                    Innovation-driven solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-tech-purple mr-2">▶</span>
                    Citizen-centric approach
                  </li>
                  <li className="flex items-center">
                    <span className="text-tech-green mr-2">▶</span>
                    Sustainable technology
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Tech Image */}
            <div className="relative slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl glow-blue"
              />
              <div className="absolute inset-0 bg-tech-gradient opacity-20 rounded-2xl"></div>
              
              {/* Floating Code Element */}
              <div className="absolute -bottom-4 -right-4 bg-gray-900 p-4 rounded-lg border border-tech-cyan glow-cyan">
                <div className="font-mono text-tech-cyan text-sm">
                  <div className="text-tech-cyan">const mission = </div>
                  <div className="text-white ml-4">transform: true,</div>
                  <div className="text-tech-green ml-4">impact: "positive"</div>
                  <div className="text-tech-cyan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 tech-circuit-bg opacity-5"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; LOADING TEAM_MEMBERS.array
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-tech-gradient">Tech Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of technology experts, innovators, and problem-solvers dedicated to municipal transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="tech-card p-6 rounded-xl bg-white hover:glow-blue transition-all duration-300 group neon-border">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Team Member" 
                  className="w-24 h-24 rounded-full mx-auto object-cover glow-cyan"
                />
                <div className="absolute inset-0 bg-tech-gradient opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-mono text-center">
                John_Doe.exe
              </h3>
              <p className="text-tech-cyan text-center mb-3 font-mono text-sm">
                [CTO] | [FULL_STACK_DEV]
              </p>
              <p className="text-gray-600 text-center text-sm">
                10+ years in municipal tech solutions, specializing in scalable web platforms and citizen engagement systems.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block bg-tech-gradient text-white px-3 py-1 rounded-full text-xs font-mono">
                  [ACTIVE]
                </span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="tech-card p-6 rounded-xl bg-white hover:glow-purple transition-all duration-300 group neon-border">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Team Member" 
                  className="w-24 h-24 rounded-full mx-auto object-cover glow-purple"
                />
                <div className="absolute inset-0 bg-tech-gradient-purple opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-mono text-center">
                Jane_Smith.py
              </h3>
              <p className="text-tech-purple text-center mb-3 font-mono text-sm">
                [AI_SPECIALIST] | [DATA_SCIENTIST]
              </p>
              <p className="text-gray-600 text-center text-sm">
                Expert in AI-driven analytics and machine learning solutions for municipal data optimization and predictive insights.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block bg-tech-gradient-purple text-white px-3 py-1 rounded-full text-xs font-mono">
                  [LEARNING]
                </span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="tech-card p-6 rounded-xl bg-white hover:glow-cyan transition-all duration-300 group neon-border">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Team Member" 
                  className="w-24 h-24 rounded-full mx-auto object-cover glow-blue"
                />
                <div className="absolute inset-0 bg-tech-gradient-accent opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-mono text-center">
                Mike_Johnson.js
              </h3>
              <p className="text-tech-green text-center mb-3 font-mono text-sm">
                [IOT_ENGINEER] | [SYSTEMS_ARCHITECT]
              </p>
              <p className="text-gray-600 text-center text-sm">
                Specializes in IoT infrastructure and smart city solutions, connecting municipal services through innovative technology.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block bg-tech-gradient-accent text-white px-3 py-1 rounded-full text-xs font-mono">
                  [CONNECTED]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-tech-gradient-secondary opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16 fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; INITIALIZING TECH_STACK.config
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-tech-gradient">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering municipal transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="tech-card p-6 rounded-xl border border-tech-cyan hover:glow-cyan transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-semibold mb-2 text-tech-cyan font-mono text-center">
                Frontend
              </h3>
              <ul className="text-gray-300 text-sm space-y-1 font-mono">
                <li>&gt; React.js</li>
                <li>&gt; TypeScript</li>
                <li>&gt; Tailwind CSS</li>
                <li>&gt; Next.js</li>
              </ul>
            </div>

            <div className="tech-card p-6 rounded-xl border border-tech-purple hover:glow-purple transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔧</div>
              <h3 className="text-xl font-semibold mb-2 text-tech-purple font-mono text-center">
                Backend
              </h3>
              <ul className="text-gray-300 text-sm space-y-1 font-mono">
                <li>&gt; Node.js</li>
                <li>&gt; Python</li>
                <li>&gt; PostgreSQL</li>
                <li>&gt; MongoDB</li>
              </ul>
            </div>

            <div className="tech-card p-6 rounded-xl border border-tech-green hover:glow-blue transition-all duration-300">
              <div className="text-4xl mb-4 text-center">☁️</div>
              <h3 className="text-xl font-semibold mb-2 text-tech-green font-mono text-center">
                Cloud
              </h3>
              <ul className="text-gray-300 text-sm space-y-1 font-mono">
                <li>&gt; AWS</li>
                <li>&gt; Docker</li>
                <li>&gt; Kubernetes</li>
                <li>&gt; Terraform</li>
              </ul>
            </div>

            <div className="tech-card p-6 rounded-xl border border-tech-cyan hover:glow-cyan transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-semibold mb-2 text-tech-cyan font-mono text-center">
                AI/ML
              </h3>
              <ul className="text-gray-300 text-sm space-y-1 font-mono">
                <li>&gt; TensorFlow</li>
                <li>&gt; PyTorch</li>
                <li>&gt; Scikit-learn</li>
                <li>&gt; OpenAI API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white tech-grid-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="font-mono text-tech-cyan text-sm mb-4 tracking-wider">
              &gt; FETCHING COMPANY_METRICS.json
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-mono">
              Our <span className="text-tech-gradient">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center tech-card p-6 rounded-xl bg-white glow-blue">
              <div className="text-5xl font-bold text-tech-gradient mb-2 font-mono">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="text-tech-cyan text-sm font-mono mt-2">[ESTABLISHED: 2019]</div>
            </div>
            <div className="text-center tech-card p-6 rounded-xl bg-white glow-cyan">
              <div className="text-5xl font-bold text-tech-gradient mb-2 font-mono">50+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
              <div className="text-tech-green text-sm font-mono mt-2">[STATUS: DELIVERED]</div>
            </div>
            <div className="text-center tech-card p-6 rounded-xl bg-white glow-purple">
              <div className="text-5xl font-bold text-tech-gradient mb-2 font-mono">25+</div>
              <div className="text-gray-600 font-medium">Municipalities Served</div>
              <div className="text-tech-purple text-sm font-mono mt-2">[NETWORK: ACTIVE]</div>
            </div>
            <div className="text-center tech-card p-6 rounded-xl bg-white glow-blue">
              <div className="text-5xl font-bold text-tech-gradient mb-2 font-mono">100K+</div>
              <div className="text-gray-600 font-medium">Citizens Impacted</div>
              <div className="text-tech-cyan text-sm font-mono mt-2">[REACH: EXPANDING]</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 