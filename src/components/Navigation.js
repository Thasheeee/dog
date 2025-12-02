import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const Navigation = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Pal for Paw</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <button 
              onClick={onLoginClick}
              className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
