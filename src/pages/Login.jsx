import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import React from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");
  const [googleError, setGoogleError] = useState("");
  const navigate = useNavigate();

  // Email & Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingLogin(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
    setLoadingLogin(false);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);
    setGoogleError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setGoogleError("No account found. Redirecting to Signup...");
        setTimeout(() => navigate("/signup"), 2000);
      } else {
        setGoogleError("Error logging in with Google. Try again.");
      }
    }
    setLoadingGoogle(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-md text-center"
      >
        <h1 className="text-4xl font-bold text-gray-200 mb-6">Login</h1>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {googleError && (
          <p className="text-red-500 text-sm mb-2">{googleError}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all w-full"
            disabled={loadingLogin}
          >
            {loadingLogin ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-gray-500 my-3">or</p>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all w-full"
          disabled={loadingGoogle}
        >
          <FaGoogle className="text-lg" /> {loadingGoogle ? "Logging in..." : "Login with Google"}
        </button>

        <div className="mt-4 text-gray-400">
            Do not have an account?
            <Link to="/signup" className="ml-1">
              Signup
            </Link>
          </div>
      </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;