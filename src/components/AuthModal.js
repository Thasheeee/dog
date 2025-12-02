import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Heart } from "lucide-react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithGoogle } from "../firebase/auth";

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (mode === "login") {
        try{
            await signInWithEmailAndPassword(formData.email, formData.password);
            alert("Login successful!");
             navigate('/prediction');
            onClose();
        }catch(error){
            alert("Error logging in: " + error.message);
        }
        
      
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try{
        await createUserWithEmailAndPassword(formData.email, formData.password);
        onClose();
      }catch(error){
        alert("Error signing up: " + error.message);
      }
     
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />{" "}
        </button>
        <div className="flex items-center justify-center mb-6">
          <Heart className="h-10 w-10 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            Pal for Paw
          </span>
        </div>
        <div className="flex mb-6 border-b">
          <button
            className={`flex-1 py-2 ${
              mode === "login"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setMode("login")}
          >
            Login{" "}
          </button>
          <button
            className={`flex-1 py-2 ${
              mode === "signup"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setMode("signup")}
          >
            {" "}
            Sign Up{" "}
          </button>
        </div>
        <div>
          {mode === "signup" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            {" "}
            <label className="block text-gray-700 mb-2">Password</label>{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />{" "}
          </div>
          {mode === "signup" && (
            <div className="mb-4">
              {" "}
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>{" "}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />{" "}
            </div>
          )}{" "}
          {mode === "login" && (
            <div className="mb-4 text-right">
              {" "}
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>{" "}
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            {" "}
            {mode === "login" ? "Login" : "Create Account"}{" "}
          </button>{" "}

          <button
           onClick={async () => {
            try{
                await signInWithGoogle();
                onClose();
            }catch(error){
                alert(error.message);
            }
           }}
            className="w-full mt-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
            >Sign in with Google</button>
        </div>{" "}
        {mode === "login" && (
          <p className="text-center mt-4 text-gray-600">
            {" "}
            Don't have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-blue-600 hover:underline font-semibold"
            >
              {" "}
              Sign up{" "}
            </button>{" "}
          </p>
        )}{" "}
        {mode === "signup" && (
          <p className="text-center mt-4 text-gray-600">
            {" "}
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-blue-600 hover:underline font-semibold"
            >
              {" "}
              Login{" "}
            </button>{" "}
          </p>
        )}{" "}
      </div>{" "}
    </div>
  );
};


export default AuthModal;