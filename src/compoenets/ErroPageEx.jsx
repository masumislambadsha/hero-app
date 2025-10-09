import React from "react";
import { useNavigate } from "react-router";

const ErrorPageEx = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center px-4">
      <div className="text-center">

        <div className="relative mb-8">
          <h1 className="text-[100px] md:text-[100px] font-black text-white opacity-20 select-none animate-pulse pt-[105px]">
            APP DOESN'T EXIST
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
              <div
                className="w-20 h-20 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-20 h-20 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>


        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-2xl mx-auto">
          <div className="mb-6">
            <svg
              className="w-24 h-24 mx-auto text-yellow-400 animate-spin-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! App Not Found
          </h2>
          <p className="text-xl text-white/80 mb-8">
            The app you're looking for seems to have wandered off into the
            digital void. Don't worry, even the best explorers get lost
            sometimes!
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-2xl"
            >
              🏠 Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-white/20 backdrop-blur text-white font-bold py-4 px-8 rounded-full hover:bg-white/30 transform transition duration-300 border-2 border-white/30"
            >
              ← Go Back
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              💡 Meanwhile, going our home, you can discover other awsome apps
            </p>
          </div>
        </div>


        <div className="fixed top-20 left-10 animate-float">
          <div className="text-6xl opacity-20">🚀</div>
        </div>
        <div
          className="fixed top-40 right-20 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-6xl opacity-20">⭐</div>
        </div>
        <div
          className="fixed bottom-20 left-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-6xl opacity-20">🌙</div>
        </div>
        <div
          className="fixed bottom-40 right-10 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="text-6xl opacity-20">✨</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPageEx;
