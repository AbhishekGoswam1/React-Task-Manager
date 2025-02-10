import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaGoogle } from "react-icons/fa"; // Importing Google icon

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingType, setLoadingType] = useState(null); // 'email' or 'google'
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Email & Password Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoadingType("email");
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please login instead.");
      } else {
        setError("Error signing up. Please try again.");
      }
    }

    setLoadingType(null);
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    setLoadingType("google");
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      setError("Error signing up with Google.");
    }

    setLoadingType(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center h-screen bg-gray-900">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-md text-center"
        >
          <h1 className="text-4xl font-bold text-gray-200 mb-6">Signup</h1>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              disabled={loadingType === "email"}
            >
              {loadingType === "email" ? "Signing up..." : "Signup"}
            </button>
          </form>

          <p className="text-gray-500 my-3">or</p>

          {/* Google Signup Button with Icon */}
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all w-full"
            disabled={loadingType === "google"}
          >
            <FaGoogle className="text-xl" />{" "}
            {loadingType === "google" ? "Signing up..." : "Signup with Google"}
          </button>

          <div className="mt-4 text-gray-400">
            Already have an account?
            <Link to="/login" className="ml-1 text-blue-400 hover:underline">
              Login
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;