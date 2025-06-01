"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto">
        <div className={`flex items-center transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="flex gap-1 items-center">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              nugget
            </span>
            <span className="text-xs sm:text-sm text-gray-400">by zomato</span>
          </div>
        </div>
        <button className={`group bg-gradient-to-r from-[#6D4AFF] to-[#8B5CF6] hover:from-[#5D3AEF] hover:to-[#7C3AED] transition-all duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all duration-1000 delay-200`}>
          <span className="relative z-10">Get in touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 mt-16 sm:mt-28 md:mt-32">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative leading-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                AI Agents,
              </span>
              <div className="absolute -top-1 sm:-top-2 -right-2 sm:right-0 w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              built for speed, scale,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              and quality
            </span>
          </h1>
        </div>
        
        <p className={`text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mb-8 leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Handling complex queries, boosting efficiency, and streamlining
          support, so your business scales faster with precision
        </p>

        <button className={`group bg-gradient-to-r from-[#6D4AFF] to-[#8B5CF6] hover:from-[#5D3AEF] hover:to-[#7C3AED] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-700`}>
          <span className="relative z-10 flex items-center gap-2">
            Get in touch
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </main>

      {/* Trusted Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 mt-20 sm:mt-32 text-center">
        <div className={`transform transition-all duration-1000 delay-200 ${scrollY > 300 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by the Zomato <span className="bg-gradient-to-r from-[#6D4AFF] to-[#8B5CF6] bg-clip-text text-transparent">ecosystem</span>
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
            We efficiently manage over 15 million monthly interactions across Zomato, at 99.99% uptime
          </p>
        </div>
        
        {/* Partner Logos */}
        <div className={`flex justify-center items-center gap-6 sm:gap-12 flex-wrap mb-20 sm:mb-32 transform transition-all duration-1000 delay-400 ${scrollY > 400 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {['Blinkit', 'Hyperpure', 'District', 'Zomato'].map((brand, index) => (
            <div key={brand} className={`bg-zinc-800/50 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 delay-${index * 100}`}>
              <span className="text-white font-semibold text-sm sm:text-base">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Tags */}
      <div className={`flex justify-center gap-2 sm:gap-4 mb-12 px-4 transform transition-all duration-1000 delay-300 ${scrollY > 500 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {[
          { icon: '⚡', text: 'No-Code', color: 'text-red-500' },
          { icon: '💰', text: 'Cost-Effective', color: 'text-yellow-500' },
          { icon: '📊', text: 'Powerful Analytics', color: 'text-blue-500' }
        ].map((tag, index) => (
          <span key={tag.text} className={`bg-zinc-900/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 delay-${index * 100}`}>
            <span className={tag.color}>{tag.icon}</span>
            <span className="hidden sm:inline">{tag.text}</span>
          </span>
        ))}
      </div>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {[
            {
              title: "Accurate Image Classification",
              description: "Enhance support by precisely categorizing images for faster resolutions",
              content: (
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg h-40 sm:h-48 flex items-center justify-center mb-4">
                    <div className="text-4xl sm:text-6xl">☕</div>
                  </div>
                  <div className="bg-purple-500/20 text-purple-400 text-xs sm:text-sm px-3 py-1 rounded-full inline-flex items-center border border-purple-500/30">
                    <span>Analysis Result</span>
                  </div>
                </div>
              )
            },
            {
              title: "Automated Quality Audits",
              description: "Ensure complete oversight by automating quality checks across all interactions",
              content: (
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 space-y-3 border border-zinc-700/50">
                  {[
                    { icon: '✓', text: 'Greeting & Introduction', status: 'success' },
                    { icon: '×', text: 'Customer Sentiment', status: 'error' },
                    { icon: '✓', text: 'Action', status: 'success' },
                    { icon: '✓', text: 'Closure', status: 'success' }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center gap-2 p-3 bg-zinc-700/50 rounded-lg border border-zinc-600/30 hover:border-purple-500/30 transition-all duration-300 delay-${index * 100}`}>
                      <span className={item.status === 'success' ? 'text-green-500' : 'text-red-500'}>{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              )
            },
            {
              title: "Intelligent Conversations",
              description: "Seamlessly integrate data sources and SOPs to generate accurate responses and actions",
              content: (
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50">
                  <div className="bg-zinc-700/50 rounded-2xl p-4 space-y-4 border border-zinc-600/30">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg max-w-[85%] text-sm">
                      Hello, how can I assist you today?
                    </div>
                    <div className="bg-zinc-600 text-white p-3 rounded-lg max-w-[85%] ml-auto text-sm">
                      I received a spilled coffee.
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg max-w-[85%] text-sm">
                      Please upload an image so I can assist you better.
                    </div>
                  </div>
                </div>
              )
            }
          ].map((feature, index) => (
            <div key={index} className={`group space-y-4 transform transition-all duration-1000 delay-${index * 200} ${scrollY > 600 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-purple-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                {feature.content}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className={`group space-y-4 transform transition-all duration-1000 delay-600 ${scrollY > 800 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-purple-400 transition-colors duration-300">Voice AI Agents</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Build and deploy low cost voice AI agents that talk and take actions like humans
            </p>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 space-y-3 border border-zinc-700/50 group-hover:scale-105 transition-transform duration-300">
              {[
                { icon: '🎙️', text: 'Low latency audio streaming' },
                { icon: '🌐', text: 'Multilingual support' },
                { icon: '⚡', text: 'Function calling' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 bg-zinc-700/50 rounded-lg border border-zinc-600/30 hover:border-purple-500/30 transition-all duration-300 delay-${index * 100}`}>
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`group space-y-4 transform transition-all duration-1000 delay-800 ${scrollY > 800 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-purple-400 transition-colors duration-300">AI Powered Analytics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Identify issues, ask questions and unlock valuable insights from your interactions
            </p>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-zinc-700/50 rounded-lg p-4 border border-zinc-600/30">
                <input 
                  type="text" 
                  placeholder="How many customers reported spilled coffee today?"
                  className="w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none text-sm focus:text-white transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className={`text-center mb-10 sm:mb-16 transform transition-all duration-1000 delay-200 ${scrollY > 1200 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">pricing</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">Choose the plan that works best for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: 'Free',
              description: 'Perfect for trying out Nugget',
              price: '$0',
              period: '/month',
              features: ['1,000 conversations/month', 'Basic analytics', 'Email support'],
              buttonText: 'Get Started',
              buttonStyle: 'border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
              popular: false
            },
            {
              name: 'Pro',
              description: 'For growing businesses',
              price: '$49',
              period: '/month',
              features: ['10,000 conversations/month', 'Advanced analytics', 'Priority support'],
              buttonText: 'Start Free Trial',
              buttonStyle: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400',
              popular: true
            },
            {
              name: 'Enterprise',
              description: 'Tailored for large-scale businesses',
              price: 'Custom',
              period: '',
              features: ['Unlimited messages', 'Dedicated support', 'Custom integrations'],
              buttonText: 'Contact Sales',
              buttonStyle: 'bg-gradient-to-r from-[#6D4AFF] to-[#8B5CF6] text-white hover:from-[#5D3AEF] hover:to-[#7C3AED]',
              popular: false
            }
          ].map((plan, index) => (
            <div key={index} className={`group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 space-y-6 border ${plan.popular ? 'border-purple-500' : 'border-zinc-700/50'} hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform delay-${index * 200} ${scrollY > 1400 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-purple-400 transition-colors duration-300">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className={`text-center mb-10 sm:mb-16 transform transition-all duration-1000 delay-200 ${scrollY > 1800 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Maximize Efficiency
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Optimize workflows, drive faster issue resolutions, and achieve measurable cost reductions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              ),
              color: 'text-purple-400',
              title: '80% Queries resolved by AI agents',
              description: 'Increase bot resolution rates, minimizing customer frustration and repeat interactions'
            },
            {
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              ),
              color: 'text-yellow-500',
              title: '25% Increase in compliance',
              description: 'Improve compliance with agent co-pilot, ensuring agents follow best practices'
            },
            {
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.54 1.27c.56-1.24.88-2.62.88-4.05 0-5.18-3.95-9.45-8.92-9.71zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05C5.94 2.31 2 6.58 2 11.75c0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                </svg>
              ),
              color: 'text-green-500',
              title: '20% Reduction in resolution time',
              description: 'Enhance team efficiency allowing for greater focus on high-value or complex queries'
            }
          ].map((stat, index) => (
            <div key={index} className={`group bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform delay-${index * 200} ${scrollY > 2000 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-purple-400 transition-colors duration-300">{stat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className={`bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center border border-zinc-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform ${scrollY > 2200 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get started and see how AI can transform your customer interactions—faster, smarter, better.
          </p>
          <button className="group bg-gradient-to-r from-[#6D4AFF] to-[#8B5CF6] hover:from-[#5D3AEF] hover:to-[#7C3AED] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transform transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get in touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <div className="flex gap-1 items-center">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                nugget
              </span>
              <span className="text-xs sm:text-sm text-gray-400">by zomato</span>
            </div>
          </div>
          <div>
            <button className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base hover:scale-105 transform">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
