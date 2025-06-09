import React from "react";

export default function About() {
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
              transform: rotate(0deg) translateX(140px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(140px) rotate(-360deg);
            }
          }

          @keyframes data-stream {
            0% {
              opacity: 0;
              transform: scaleY(0);
            }
            50% {
              opacity: 1;
              transform: scaleY(1);
            }
            100% {
              opacity: 0;
              transform: scaleY(0);
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
            animation: orbit 15s linear infinite;
          }

          .animate-data-stream {
            animation: data-stream 2s ease-in-out infinite;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
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
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-6 relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-lg animate-spin-slow" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" />
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              About Our AI Bot
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Discover the future of intelligent conversation with our
              cutting-edge AI assistant.
            </p>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column */}
            <div className="space-y-8 animate-slideInLeft">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white/30 rounded-md animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-bold text-cyan-400">
                    What We Do
                  </h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our AI bot is designed to understand and respond to any query.
                  Whether you're seeking information, assistance, or a smart
                  chat—our bot is ready 24/7.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white/30 rounded-md animate-spin-slow" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">
                    How It Works
                  </h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Type your question in the chat. Our advanced AI uses NLP to
                  understand and respond with accuracy, relevance, and clarity.
                </p>
              </div>
            </div>

            {/* Right Column (AI Animation) */}
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

                {/* Orbiting Dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-orbit"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "0 0",
                      transform: `rotate(${i * 45}deg) translateX(140px)`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}

                {/* Data Streams */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-16 bg-gradient-to-t from-transparent via-cyan-400 to-transparent opacity-50 animate-data-stream"
                      style={{
                        transform: `rotate(${i * 30}deg) translateY(-120px)`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Creator Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto hover:border-cyan-400/30 transition-all duration-500">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl mb-6 hover:scale-110 transition-transform duration-300">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white">RK</div>
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Meet the Creator
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                    Rishit Kabra
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    A passionate fresher exploring the world of tech, this is my
                    first AI project—an embodiment of curiosity, learning, and
                    innovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                    My Vision
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I believe AI should be approachable and helpful. This bot is
                    my first step in building accessible, intelligent systems
                    that support everyone’s daily life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
