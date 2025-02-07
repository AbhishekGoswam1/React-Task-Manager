import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Navbar /> 

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Organize Your Tasks Effortlessly with Prio
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Boost your productivity with smart task management, deadline reminders, and seamless organization.
        </p>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="mt-6"
        >
          <Link to="/login">
            <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="py-16 px-6 bg-white text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Prio?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Smart Task Organization</h3>
            <p className="text-gray-600">Create, categorize, and prioritize your tasks with ease.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Deadline Reminders</h3>
            <p className="text-gray-600">Never miss an important deadline with built-in notifications.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
            <p className="text-gray-600">Share tasks with your team and work together effortlessly.</p>
          </motion.div>
        </div>
      </motion.section>

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
          Say goodbye to scattered notes and missed deadlines. Get started with Prio today and take control of your productivity.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/login">
            <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow-lg hover:bg-gray-100">
              Start Now
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;