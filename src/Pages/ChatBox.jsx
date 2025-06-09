import React, { useState } from "react";
import AskAI from "../utils/AskAI";


export default function ChatBox() {
  const [Res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");



    async function handelSubmit(e) {
      
      e.preventDefault();
      let question = e.target[0].value;
      let R = AskAI(question);
      setRes(R)
    }
  // Mock AskAI function for demonstration
  // async function AskAI(question) {
  //   // Simulate API delay
  //   await new Promise((Resolve) => setTimeout(Resolve, 1500));
  //   return `I understand you're asking about "${question}". This is a demo Response from Vatsalaya AI. In a real implementation, this would connect to your AI service to provide intelligent Responses.`;
  // }

  async function handleSubmit(e) {
    if (e) e.preventDefault();
    const question = inputValue.trim();
    if (!question) return;

    setIsLoading(true);
    try {
      const Response = await AskAI(question);
      setRes(Response);
    } catch (error) {
      setRes("Sorry, I encountered an error. Please try again.");
    } finally {
      setIsLoading(false);
      setInputValue("");
    }
  }

  const quickTopics = [
    "Technology",
    "AI",
    "Counseling",
    "Problem Solving",
    "Learning",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-4xl">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 animate-pulse">
          <div className="inline-block mb-6 relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-700 hover:scale-110">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-xl animate-spin"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
            Vatsalaya AI
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-3 font-medium">
            Your Intelligent Companion for Every Conversation
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
            <span>Crafted with ❤️ by</span>
            <span className="text-cyan-400 font-semibold">Rishit Kabra</span>
            <span>•</span>
            <span className="text-purple-400 font-semibold">
              Founder of Vatsalaya
            </span>
          </div>
        </div>

        {/* AI Avatar with Enhanced Animation */}
        <div className="flex justify-center mb-10">
          <div className="relative group">
            <div className="w-36 h-36 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <div className="text-4xl">🧠</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          </div>
        </div>

        {/* Modern Chat Interface */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl">
          <div className="space-y-8">
            {/* Enhanced Input Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPRess={(e) => e.key === "Enter" && handleSubmit(e)}
                  placeholder="Ask me anything... I'm here to help! ✨"
                  className="w-full bg-transparent px-6 py-5 text-white placeholder-slate-400 focus:outline-none text-lg focus:placeholder-slate-500 transition-all duration-300"
                  disabled={isLoading}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isLoading || !inputValue.trim()}
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105 hover:shadow-3xl disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-lg">Thinking...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">Ask Vatsalaya</span>
                      <div className="w-6 h-6 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
                        ✨
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Response Section */}
          {(Res || isLoading) && (
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    {isLoading ? (
                      <div className="w-7 h-7 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <div className="text-xl">🤖</div>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                    {isLoading ? (
                      <div className="flex items-center space-x-3 text-slate-300">
                        <span className="text-lg font-medium animate-pulse">
                          Vatsalaya is thinking
                        </span>
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Vatsalaya AI Response</span>
                        </div>
                        <p className="text-slate-200 text-lg leading-relaxed whitespace-pre-wrap">
                          {Res}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Quick Actions */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 mb-6 text-lg">✨ Try asking about:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {quickTopics.map((topic, index) => (
              <button
                key={topic}
                onClick={() =>
                  setInputValue(`Tell me about ${topic.toLowerCase()}`)
                }
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl text-sm text-slate-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-white transition-all duration-300 border border-white/20 hover:border-cyan-400/50 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Credit */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p className="mb-2">Powered by Advanced AI Technology</p>
          <div className="flex items-center justify-center space-x-2">
            <span>Built by</span>
            <span className="text-cyan-400 font-semibold">Rishit Kabra</span>
            <span>•</span>
            <span className="text-purple-400 font-semibold">
              Vatsalaya Founder
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
