import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Input Method",
      description:
        "Upload a photo of the skin condition OR write notes describing the symptoms",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop&q=80",
    },
    {
      number: "2",
      title: "AI Analysis",
      description:
        "Our dual-model AI analyzes visual features or processes your written description",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80",
    },
    {
      number: "3",
      title: "Get Results",
      description:
        "Receive accurate disease predictions and detailed care recommendations",
      image:
        "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?w=400&h=300&fit=crop&q=80",
    },
  ];
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>{" "}
          <p className="text-xl text-gray-600">Simple, fast, and reliable</p>{" "}
        </div>{" "}
        <div className="grid grid-cols-3 gap-6">
          {" "}
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {" "}
              <div className="h-full flex flex-col">
                {" "}
                <div className="h-40 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                  {" "}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />{" "}
                </div>{" "}
                <div className="p-5 flex flex-col items-center text-center flex-grow">
                  {" "}
                  <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-3 shadow-lg">
                    {" "}
                    {step.number}{" "}
                  </div>{" "}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>{" "}
                  <p className="text-gray-600 text-sm">{step.description}</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default HowItWorksSection;