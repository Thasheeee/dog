import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ onGetStarted, onLearnMore }) => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Detect Dog Skin Diseases Using Images or Notes
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Upload a photo or describe symptoms in your own words. Our AI analyzes both visual and textual information to provide accurate skin disease predictions.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={onGetStarted}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={onLearnMore}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-4">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&q=80" 
                alt="Happy golden retriever dog" 
                className="rounded-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&q=80";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
