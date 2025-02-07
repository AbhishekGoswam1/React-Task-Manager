import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-200 max-w-96"
      whileHover={{ scale: 1.04, rotateX: 5, rotateY: 5 }}
    >
      <div className="text-4xl mb-4 text-indigo-500">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;