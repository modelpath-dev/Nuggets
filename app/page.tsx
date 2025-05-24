import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="flex gap-1 items-center">
            <span className="text-xl font-semibold">nugget</span>
            <span className="text-sm text-gray-400">by zomato</span>
          </div>
        </div>
        <button className="bg-[#6D4AFF] hover:bg-[#5D3AEF] transition-colors text-white px-6 py-2 rounded-lg text-sm font-medium">
          Get in touch
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4 mt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          <span className="relative">
            AI Agents,
            <div className="absolute -top-2 right-0 w-16 h-1 bg-orange-500"></div>
          </span>
          <br />
          built for speed, scale,
          <br />
          and quality
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
          Handling complex queries, boosting efficiency, and streamlining
          support, so your business scales faster with precision
        </p>

        <button className="bg-[#6D4AFF] text-white px-8 py-3 rounded-lg text-lg">
          Get in touch
        </button>
      </main>

      {/* Trusted Section */}
      <section className="max-w-6xl mx-auto px-4 mt-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by the Zomato <span className="text-[#6D4AFF]">ecosystem</span>
        </h2>
        <p className="text-gray-400 mb-12">
          We efficiently manage over 15 million monthly interactions across Zomato, at 99.99% uptime
        </p>
        
        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-12 flex-wrap mb-32">
          <Image src="/blinkit.svg" alt="Blinkit" width={120} height={40} />
          <Image src="/hyperpure.svg" alt="Hyperpure" width={120} height={40} />
          <Image src="/district.svg" alt="District" width={120} height={40} />
          <Image src="/zomato.svg" alt="Zomato" width={120} height={40} />
        </div>
      </section>

      {/* Features */}
        <div className="flex justify-center gap-4 mb-12">
          <span className="bg-zinc-900 px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <span className="text-red-500">⚡</span> No-Code
          </span>
          <span className="bg-zinc-900 px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <span className="text-yellow-500">💰</span> Cost-Effective
          </span>
          <span className="bg-zinc-900 px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <span className="text-blue-500">📊</span> Powerful Analytics
          </span>
        </div>

       {/* Feature Cards with Images */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Accurate Image Classification</h3>
            <p className="text-gray-400 text-sm">
              Enhance support by precisely categorizing images for faster resolutions
            </p>
            <div className="bg-zinc-900/50 rounded-xl p-4">
              <Image 
                src="/coffee-analysis.png" 
                alt="Coffee Analysis"
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              <div className="mt-4 bg-purple-500/10 text-purple-400 text-sm px-3 py-1 rounded-full inline-flex items-center">
                <span>Analysis Result</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Automated Quality Audits</h3>
            <p className="text-gray-400 text-sm">
              Ensure complete oversight by automating quality checks across all interactions
            </p>
            <div className="bg-zinc-900/50 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span>Greeting & Introduction</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span className="text-red-500">×</span>
                <span>Customer Sentiment</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span>Action</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span className="text-green-500">✓</span>
                <span>Closure</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Intelligent Conversations</h3>
            <p className="text-gray-400 text-sm">
              Seamlessly integrate data sources and SOPs to generate accurate responses and actions
            </p>
            <div className="bg-zinc-900/50 rounded-xl p-4">
              <div className="bg-zinc-800 rounded-2xl p-4 space-y-4">
                <div className="bg-purple-500 text-white p-3 rounded-lg max-w-[80%]">
                  Hello, how can I assist you today?
                </div>
                <div className="bg-zinc-700 text-white p-3 rounded-lg max-w-[80%] ml-auto">
                  I received a spilled coffee.
                </div>
                <div className="bg-purple-500 text-white p-3 rounded-lg max-w-[80%]">
                  Please upload an image of the spilled coffee so that I can assist you better.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Voice AI Agents</h3>
            <p className="text-gray-400 text-sm">
              Build and deploy low cost voice AI agents that talk and take actions like humans
            </p>
            <div className="bg-zinc-900/50 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span>🎙️</span>
                <span>Low latency audio streaming</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span>🌐</span>
                <span>Multilingual support</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                <span>⚡</span>
                <span>Function calling</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">AI Powered Analytics</h3>
            <p className="text-gray-400 text-sm">
              Identify issues, ask questions and unlock valuable insights from your interactions
            </p>
            <div className="bg-zinc-900/50 rounded-xl p-4">
              <div className="bg-zinc-800 rounded-lg p-4">
                <input 
                  type="text" 
                  placeholder="How many customers reported spilled coffee today?"
                  className="w-full bg-transparent text-gray-400 placeholder-gray-500 outline-none"
                />
              </div>
            </div>
          </div>
          </div>
      </section>

            {/* ...existing code... */}
      
      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent <span className="text-purple-500">pricing</span>
          </h2>
          <p className="text-gray-400">Choose the plan that works best for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-zinc-900/50 rounded-xl p-6 space-y-6 border border-zinc-800">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Free</h3>
              <p className="text-gray-400">Perfect for trying out Nugget</p>
            </div>
            <div>
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>1,000 conversations/month</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-zinc-900/50 rounded-xl p-6 space-y-6 border border-purple-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Pro</h3>
              <p className="text-gray-400">For growing businesses</p>
            </div>
            <div>
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>10,000 conversations/month</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 rounded-lg bg-purple-500 text-white hover:bg-purple-400 transition-all duration-300">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-zinc-900/50 rounded-xl p-6 space-y-6 border border-zinc-800">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Enterprise</h3>
              <p className="text-gray-400">Tailored for large-scale businesses</p>
            </div>
            <div>
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited messages</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Custom integrations</span>
              </li>
            </ul>
            <button className="bg-[#6D4AFF] text-white w-full py-2 rounded-lg font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

            {/* ...existing code... */}

      {/* Efficiency Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Maximize Efficiency
          </h2>
          <p className="text-gray-400">
            Optimize workflows, drive faster issue resolutions, and achieve measurable cost reductions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-900/50 rounded-xl p-6 space-y-4">
            <div className="text-purple-400">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">80% Queries resolved by AI agents</h3>
            <p className="text-gray-400 text-sm">
              Increase bot resolution rates, minimizing customer frustration and repeat interactions
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/50 rounded-xl p-6 space-y-4">
            <div className="text-yellow-500">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">25% Increase in compliance</h3>
            <p className="text-gray-400 text-sm">
              Improve compliance with agent co-pilot, ensuring agents follow best practices
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/50 rounded-xl p-6 space-y-4">
            <div className="text-green-500">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.54 1.27c.56-1.24.88-2.62.88-4.05 0-5.18-3.95-9.45-8.92-9.71zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05C5.94 2.31 2 6.58 2 11.75c0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">20% Reduction in resolution time</h3>
            <p className="text-gray-400 text-sm">
              Enhance team efficiency allowing for greater focus on high-value or complex queries
            </p>
          </div>
        </div>
      </section>

           {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-zinc-900/50 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-gray-400 mb-8">
            Get started and see how AI can transform your customer interactions—faster, smarter, better.
          </p>
          <button className="bg-[#6D4AFF] hover:bg-[#5D3AEF] transition-colors text-white px-8 py-3 rounded-lg text-lg font-medium">
            Get in touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex gap-1 items-center">
              <span className="text-xl font-semibold">nugget</span>
              <span className="text-sm text-gray-400">by zomato</span>
            </div>
          </div>
          <div>
            <button className="text-white hover:text-purple-400 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}