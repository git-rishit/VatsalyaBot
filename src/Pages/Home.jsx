import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>
        {`
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

        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
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
          animation: spin-slow 20s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 12s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .photo-placeholder {
          background: linear-gradient(45deg, #0891b2, #3b82f6, #8b5cf6, #0891b2);
          background-size: 400% 400%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-12 h-12 text-white animate-spin-slow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.9 21 5 21H11V19H5V3H13V9H21ZM14 15.5C14 14.1 15.1 13 16.5 13S19 14.1 19 15.5 17.9 18 16.5 18 14 16.9 14 15.5Z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" />
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              VatsalyaBot
            </h1>
            <p className="text-2xl text-purple-300 mb-2 animate-fadeInUp">
              (वात्सल्य) by Rishit
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 animate-fadeInUp">
              Your intelligent AI companion for meaningful conversations,
              instant answers, and intelligent solutions at your fingertips.
            </p>

            {/* CTA Button */}
            <Link to = "/ChatBox">
            <div className="mb-16 animate-fadeInUp">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 transform active:scale-95 border border-white/20">
                Start Chatting Now
              </button>
            </div>
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Features */}
            <div className="space-y-8 animate-slideInLeft">
              {/* Feature 1 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-cyan-400">
                    Smart AI Responses
                  </h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Get intelligent, contextual answers to all your questions with
                  our advanced AI technology that understands context and
                  nuance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">
                    Natural Conversations
                  </h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Engage in human-like dialogue with our sophisticated
                  conversational AI that understands and responds naturally.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-400">
                    Instant Solutions
                  </h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Fast, accurate responses powered by cutting-edge artificial
                  intelligence algorithms for immediate assistance.
                </p>
              </div>
            </div>

            {/* Right Column - AI Visualization */}
            <div className="relative flex justify-center items-center animate-slideInRight">
              <div className="relative">
                {/* AI Core */}
                <div className="w-64 h-64 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                  <div className="w-48 h-48 bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full flex items-center justify-center animate-ping-slow">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-orbit"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "0 0",
                      transform: `rotate(${i * 60}deg) translateX(100px)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Developer Photo Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="relative mb-6">
                {/* Photo Frame */}
                <div className="w-48 h-48 mx-auto relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-slate-900 p-2">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                        {/* Placeholder for photo - replace the src with your actual photo */}
                        <div className="w-full h-full photo-placeholder flex items-center justify-center">
                          <div className="text-white text-center">
                            <svg
                              className="w-16 h-16 mx-auto mb-2 opacity-60"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <p className="text-sm opacity-60"></p>
                          </div>
                        </div>
                      
                      <img 
                        src= "./Components/Images/rishit.jpg"
                        alt="Rishit Kabra" 
                        className="w-full h-full object-cover"
                      />
                      </div>
                    </div>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Developer Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text mb-2">
                  Powered by Rishit Kabra
                </h3>
                <p className="text-slate-300 text-lg">
                  Full Stack Developer & AI Enthusiast
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" />
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-500" />
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
              Get started with VatsalyaBot in three simple steps
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-float">
                  1
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Start a Chat
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Click the "Start Chatting Now" button to begin your
                  conversation with our AI
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  2
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Ask Questions
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Type your questions or topics you'd like to discuss - anything
                  you're curious about
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  3
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  Get Answers
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Receive intelligent, helpful responses instantly with detailed
                  explanations
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center animate-fadeInUp">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto hover:border-cyan-400/30 transition-all duration-500">
              <p className="text-slate-300 text-lg mb-2">
                Powered by Rishit • Built with ❤️ for seamless conversations
              </p>
              <p className="text-slate-400">
                Experience the future of AI interaction today
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
