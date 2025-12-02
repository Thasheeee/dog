import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {" "}
          <div className="rounded-lg shadow-2xl overflow-hidden">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop&q=80"
              alt="Veterinarian examining a dog"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&q=80";
              }}
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Pal for Paw
            </h2>{" "}
            <p className="text-lg text-gray-700 mb-4">
              {" "}
              We're revolutionizing dog skin disease detection with our
              innovative dual-input AI system. Whether you're a pet owner or a
              veterinarian, Pal for Paw makes diagnosis accessible and accurate.{" "}
            </p>{" "}
            <p className="text-lg text-gray-700 mb-6">
              {" "}
              Our advanced AI models are trained on extensive veterinary
              datasets to understand both visual patterns in images and
              contextual information from written descriptions.{" "}
            </p>{" "}
            <div className="space-y-3">
              {" "}
              <div className="flex items-center">
                {" "}
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />{" "}
                <span className="text-gray-700">
                  Image-based disease detection
                </span>{" "}
              </div>{" "}
              <div className="flex items-center">
                {" "}
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />{" "}
                <span className="text-gray-700">
                  Text-based symptom analysis
                </span>{" "}
              </div>{" "}
              <div className="flex items-center">
                {" "}
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />{" "}
                <span className="text-gray-700">
                  Works with notes from owners & vets
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default AboutSection;