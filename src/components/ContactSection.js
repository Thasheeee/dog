import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>{" "}
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-3 gap-8">
          {" "}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {" "}
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />{" "}
            <h3 className="text-xl font-semibold mb-2">Email</h3>{" "}
            <p className="text-gray-600">support@palforpaw.ai</p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {" "}
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />{" "}
            <h3 className="text-xl font-semibold mb-2">Phone</h3>{" "}
            <p className="text-gray-600">+1 (555) 123-4567</p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {" "}
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />{" "}
            <h3 className="text-xl font-semibold mb-2">Address</h3>{" "}
            <p className="text-gray-600">123 Pet Care Lane, CA 94105</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default ContactSection;