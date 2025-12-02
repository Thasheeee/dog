import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-4 gap-8">
          {" "}
          <div>
            {" "}
            <div className="flex items-center mb-4">
              {" "}
              <Heart className="h-8 w-8 text-blue-400" />{" "}
              <span className="ml-2 text-xl font-bold">Pal for Paw</span>{" "}
            </div>{" "}
            <p className="text-gray-400">
              Empowering pet owners with AI-driven healthcare insights
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>{" "}
            <ul className="space-y-2">
              {" "}
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>{" "}
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition"
                >
                  Features
                </a>
              </li>{" "}
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-lg font-semibold mb-4">Legal</h4>{" "}
            <ul className="space-y-2">
              {" "}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Disclaimer
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>{" "}
            <p className="text-gray-400 mb-4">
              Stay updated with pet health tips
            </p>{" "}
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg text-gray-900 mb-2"
            />{" "}
            <button className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              {" "}
              Subscribe{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          {" "}
          <p>&copy; 2024 Pal for Paw. All rights reserved.</p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;