import React from "react";
import { Zap, Shield, Heart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Dual Input Methods",
      description: "Upload images or describe symptoms — AI handles both.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "High Accuracy",
      description: "Trained on veterinary data for reliable predictions.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400"
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Instant Results",
      description: "Get predictions within seconds.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose Pal for Paw?</h2>
          <p className="text-xl text-gray-600">Fast, accurate, and easy to use.</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg">
              <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover" />
              <div className="p-5 text-center">
                {feature.icon}
                <h3 className="font-semibold mt-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
