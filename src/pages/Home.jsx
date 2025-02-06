import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 min-h-screen text-white">
    <Navbar /> // Add the Navbar component
    

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Organize Your Tasks Effortlessly
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Stay on top of your work with reminders, deadlines, and smart task tracking.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-gray-100"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
}

export default Home;
