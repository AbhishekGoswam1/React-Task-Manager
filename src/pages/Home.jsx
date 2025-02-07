import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import { FaTasks, FaBell, FaUsers } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
        >
          Organize Your Tasks <br /> Effortlessly with Prio
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300">
          Boost your productivity with smart task management, deadline
          reminders, and seamless organization.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
          <Link to="/login">
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-500">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 text-center bg-gray-800">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10">
          Why Choose Prio?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard
            title="Smart Organization"
            description="Create, categorize, and prioritize tasks effortlessly."
            icon={<FaTasks />}
          />
          <FeatureCard
            title="Deadline Reminders"
            description="Never miss an important deadline again."
            icon={<FaBell />}
          />
          <FeatureCard
            title="Team Collaboration"
            description="Share tasks and work together seamlessly."
            icon={<FaUsers />}
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 px-6 text-center bg-indigo-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Get More Done with Prio</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Say goodbye to scattered notes and missed deadlines. Get started today
          and take control of your productivity.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/login">
            <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow-lg hover:bg-gray-100">
              Start Now
            </button>
          </Link>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Home;
