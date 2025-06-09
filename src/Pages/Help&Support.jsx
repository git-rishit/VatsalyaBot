import React, { useState } from "react";

export default function HelpSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        @keyframes data-flow {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes social-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes neural-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes circuit-flow {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out 0.3s both;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out 0.5s both;
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 12s linear infinite;
        }

        .animate-data-flow {
          animation: data-flow 3s ease-in-out infinite;
        }

        .animate-social-bounce {
          animation: social-bounce 2s ease-in-out infinite;
        }

        .animate-neural-pulse {
          animation: neural-pulse 4s ease-in-out infinite;
        }

        .animate-circuit-flow {
          animation: circuit-flow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* AI Neural Network Background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            {/* Neural Network Lines */}
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <line
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="animate-circuit-flow"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              </g>
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Neural Nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-cyan-400/50 rounded-full animate-neural-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* AI Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-16 bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-data-flow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Floating AI Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* AI Brain Visualization */}
        <div className="absolute top-10 right-10 opacity-30">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
            <div
              className="absolute inset-4 bg-gradient-to-r from-blue-400/30 to-pink-500/30 rounded-full animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="absolute inset-8 bg-gradient-to-r from-cyan-300/40 to-blue-400/40 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 animate-pulse-glow">
                  <div className="text-3xl">🚀</div>
                </div>
                {/* Orbiting elements around icon */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-purple-400 rounded-full animate-orbit"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "0 0",
                      animationDelay: `${i * 0.5}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Help & Support
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Need assistance? We're here to help! Reach out to us through the
              form below or connect on social media
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-xl">📧</div>
                  </div>
                  <h2 className="text-3xl font-bold text-cyan-400">
                    Contact Form
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="block text-slate-300 text-sm font-medium mb-2">
                        Your Name *
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <div className="block text-slate-300 text-sm font-medium mb-2">
                        Email Address *
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="block text-slate-300 text-sm font-medium mb-2">
                      Subject *
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <div className="block text-slate-300 text-sm font-medium mb-2">
                      Message *
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 transform"
                  >
                    Send Message 🚀
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ and Social */}
            <div className="animate-slideInRight space-y-8">
              {/* FAQ Section */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-xl">❓</div>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">
                    Quick Help
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "How does the AI bot work?",
                      a: "Simply type your question in the chat box and our AI will provide intelligent responses using advanced natural language processing.",
                    },
                    {
                      q: "Is the service free?",
                      a: "Yes! Our AI bot is completely free to use. Just start chatting and explore its capabilities.",
                    },
                    {
                      q: "What kind of questions can I ask?",
                      a: "You can ask anything! From general knowledge to specific help with problems - our AI is designed to assist with various topics.",
                    },
                    {
                      q: "How fast will I get a response?",
                      a: "Our AI responds instantly! For support queries through this form, I typically reply within 2-24 hours.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <h4 className="text-cyan-300 font-semibold mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-slate-300 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-xl">🌐</div>
                  </div>
                  <h2 className="text-2xl font-bold text-green-400">
                    Connect With Me
                  </h2>
                </div>

                <p className="text-slate-300 mb-6">
                  Follow me on social media for updates, behind-the-scenes
                  content, and AI development journey!
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Instagram",
                      icon: "📷",
                      color: "from-pink-500 to-purple-600",
                      link: "https://instagram.com/https.rishit07",
                      hoverColor: "hover:shadow-pink-500/50",
                    },
                    {
                      name: "Facebook",
                      icon: "📘",
                      color: "from-blue-600 to-blue-700",
                      link: "https://facebook.com/your_profile",
                      hoverColor: "hover:shadow-blue-500/50",
                    },
                    {
                      name: "WhatsApp",
                      icon: "💬",
                      color: "from-green-500 to-green-600",
                      link: "https://wa.me/7610675640",
                      hoverColor: "hover:shadow-green-500/50",
                    },
                    {
                      name: "LinkedIn",
                      icon: "💼",
                      color: "from-blue-500 to-blue-600",
                      link: "www.linkedin.com/in/rishit-kabra-144297328",
                      hoverColor: "hover:shadow-blue-400/50",
                    },
                    {
                      name: "GitHub",
                      icon: "⚡",
                      color: "from-gray-700 to-gray-800",
                      link: "https://github.com/git-rishit",
                      hoverColor: "hover:shadow-gray-500/50",
                    },
                    {
                      name: "Twitter",
                      icon: "🐦",
                      color: "from-blue-400 to-blue-500",
                      link: "https://twitter.com/your_username",
                      hoverColor: "hover:shadow-blue-300/50",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${social.color} p-4 rounded-2xl text-center hover:scale-110 transition-all duration-300 hover:shadow-2xl ${social.hoverColor} animate-social-bounce block group`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-50 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div className="text-white text-sm font-medium">
                        {social.name}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-slate-400 text-sm">
                    Created with ❤️ by{" "}
                    <span className="text-cyan-400 font-semibold">
                      Rishit Kabra
                    </span>
                  </p>
                  <p className="text-slate-500 text-xs mt-2">
                    Fresher • AI Enthusiast • Always Learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 animate-fadeInUp">
            {[
              { number: "24/7", label: "AI Available", icon: "🤖" },
              { number: "< 2hrs", label: "Response Time", icon: "⚡" },
              { number: "100%", label: "Satisfaction Goal", icon: "🎯" },
              { number: "Free", label: "Forever", icon: "💎" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 animate-float hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Features Preview */}
          <div className="mt-16 text-center animate-fadeInUp">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/20">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Why Choose Our AI Bot?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                {[
                  {
                    icon: "🧠",
                    title: "Smart AI",
                    desc: "Advanced language processing",
                  },
                  {
                    icon: "⚡",
                    title: "Lightning Fast",
                    desc: "Instant responses every time",
                  },
                  {
                    icon: "🔒",
                    title: "Secure & Private",
                    desc: "Your data stays protected",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
