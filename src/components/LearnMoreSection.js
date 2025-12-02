import { X } from "lucide-react";

const LearnMoreSection = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto pt-24">
      {" "}
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full my-8 relative">
        {" "}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          {" "}
          <X className="h-6 w-6" />{" "}
        </button>{" "}
        <div className="p-8">
          {" "}
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Pal for Paw
          </h2>{" "}
          <div className="prose max-w-none">
            {" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What is Pal for Paw?
            </h3>{" "}
            <p className="text-lg text-gray-700 mb-6">
              {" "}
              Pal for Paw is an advanced AI-powered platform designed to help
              detect and identify skin diseases in dogs. Our system uses
              state-of-the-art machine learning models that can analyze
              information in two distinct ways, making it flexible and
              accessible for everyone.{" "}
            </p>{" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Two Ways to Get Predictions
            </h3>{" "}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              {" "}
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                1. Image-Based Detection
              </h4>{" "}
              <p className="text-gray-700 mb-3">
                {" "}
                Upload clear photos of your dog's skin condition. Our computer
                vision AI model analyzes visual features including:{" "}
              </p>{" "}
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {" "}
                <li>Lesion patterns and distribution</li>{" "}
                <li>Color variations and inflammation</li>{" "}
                <li>Texture changes and scaling</li> <li>Hair loss patterns</li>{" "}
                <li>Size and shape of affected areas</li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              {" "}
              <h4 className="text-xl font-semibold text-green-900 mb-3">
                2. Text-Based Analysis
              </h4>{" "}
              <p className="text-gray-700 mb-3">
                {" "}
                Can't get a good photo? No problem! Simply describe what you
                observe in plain language. Our natural language processing AI
                understands:{" "}
              </p>{" "}
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {" "}
                <li>Symptom descriptions from pet owners</li>{" "}
                <li>Clinical notes from veterinarians</li>{" "}
                <li>Behavioral changes (scratching, licking)</li>{" "}
                <li>Timeline of symptom development</li>{" "}
                <li>Location and spread of the condition</li>{" "}
              </ul>{" "}
              <p className="text-gray-700 mt-3 italic">
                {" "}
                Example: "My dog has been scratching behind his ears for 3 days.
                The skin is red and flaky with some hair loss. He also has small
                bumps on his belly."{" "}
              </p>{" "}
            </div>{" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who Can Use Pal for Paw?
            </h3>{" "}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {" "}
              <div className="border border-gray-200 p-4 rounded-lg">
                {" "}
                <h4 className="font-semibold text-lg mb-2">Pet Owners</h4>{" "}
                <p className="text-gray-700">
                  {" "}
                  Get quick insights about concerning skin conditions before
                  visiting the vet. Help identify when immediate care is needed.{" "}
                </p>{" "}
              </div>{" "}
              <div className="border border-gray-200 p-4 rounded-lg">
                {" "}
                <h4 className="font-semibold text-lg mb-2">
                  Veterinarians
                </h4>{" "}
                <p className="text-gray-700">
                  {" "}
                  Use as a diagnostic aid tool. Input clinical observations or
                  upload patient photos for AI-assisted differential diagnosis.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Common Detectable Conditions
            </h3>{" "}
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {" "}
              <div className="bg-gray-50 p-3 rounded text-center">
                Bacterial Infections
              </div>{" "}
              <div className="bg-gray-50 p-3 rounded text-center">
                Fungal Infections
              </div>{" "}
              <div className="bg-gray-50 p-3 rounded text-center">
                Allergic Dermatitis
              </div>{" "}
              <div className="bg-gray-50 p-3 rounded text-center">Mange</div>{" "}
              <div className="bg-gray-50 p-3 rounded text-center">
                Hot Spots
              </div>{" "}
              <div className="bg-gray-50 p-3 rounded text-center">
                Seborrhea
              </div>{" "}
            </div>{" "}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              {" "}
              <p className="text-sm text-yellow-800">
                {" "}
                <strong>Important:</strong> Pal for Paw is a diagnostic aid tool
                and should not replace professional veterinary care. Always
                consult with a licensed veterinarian for proper diagnosis and
                treatment.{" "}
              </p>{" "}
            </div>{" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Both Input Methods?
            </h3>{" "}
            <p className="text-lg text-gray-700 mb-4">
              {" "}
              We understand that not every situation is the same. Sometimes you
              have clear photos, other times your dog won't stay still.
              Sometimes a vet has detailed clinical notes but limited imagery.
              By supporting both input methods, we ensure you can always get the
              help you need, regardless of your circumstances.{" "}
            </p>{" "}
            <div className="text-center mt-8">
              {" "}
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold"
              >
                {" "}
                Get Started Now{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default LearnMoreSection;