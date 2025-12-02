import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

import { useAuth } from '../contexts/authContext';


const BrowseAdoptionsSection = () => {
  const provinces = [
    { name: 'Western Province', icon: '🏙️', dogs: 45 },
    { name: 'Central Province', icon: '⛰️', dogs: 32 },
    { name: 'Southern Province', icon: '🏖️', dogs: 28 },
    { name: 'Northern Province', icon: '🌾', dogs: 18 },
    { name: 'Eastern Province', icon: '🌊', dogs: 22 },
    { name: 'North Western Province', icon: '🌴', dogs: 25 },
    { name: 'North Central Province', icon: '🏛️', dogs: 15 },
    { name: 'Uva Province', icon: '🍃', dogs: 20 },
    { name: 'Sabaragamuwa Province', icon: '⛰️', dogs: 17 }
  ];

  const navigate = useNavigate();

  const handleProvinceClick = (provinceName) => {
    // This will be replaced with React Router navigation
     navigate(`/adoptions/${provinceName}`);
    alert(`Navigating to adoption page for ${provinceName}. This will be a separate page with React Router.`);
  };

  return (
    <section id="browse-adoptions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Companion</h2>
          <p className="text-xl text-gray-600">Browse dogs available for adoption across Sri Lanka</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {provinces.map((province, index) => (
            <div
              key={index}
              onClick={() => handleProvinceClick(province.name)}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer p-6 border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{province.icon}</div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {province.dogs} Dogs
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{province.name}</h3>
              <p className="text-gray-600 mb-4">View available dogs in this province</p>
              <div className="flex items-center text-blue-600 font-semibold">
                Browse Now <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg inline-block">
            <p className="text-gray-700">
              <strong>Want to list a dog for adoption?</strong> Login to post adoption listings and help dogs find loving homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseAdoptionsSection;