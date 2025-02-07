import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, Typography } from "@mui/material";
import MadeBy from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gray-900 min-h-screen text-gray-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mt-40"
        >
          About <span className="text-indigo-600">Prio</span>
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Prio is a simple and efficient task management app designed to help you stay organized and productive.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white bg-opacity-80 shadow-md rounded-lg p-4 w-80 hover:shadow-xl">
                <CardContent>
                  <h6 className="text-indigo-600 font-bold">{feature.title}</h6>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Our Mission */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-indigo-700 text-white text-center"
      >
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          At Prio, we believe that productivity should be simple and efficient. Our mission is to help individuals and teams organize their tasks seamlessly.
        </p>
      </motion.section>
      </div>
      <Footer />
    </div>
  );
};

const features = [
  { title: "Smart Task Management", description: "Easily create, update, and delete tasks with a user-friendly interface." },
  { title: "Cloud Sync", description: "Your tasks are stored securely and accessible from anywhere." },
  { title: "User-Friendly UI", description: "A minimal and clean design to keep you focused on your tasks." }
];

export default About;