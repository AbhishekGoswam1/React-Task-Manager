import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const MadeBy = () => {
  return (
    <div className="text-center py-6 bg-gray-900 shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Made by Abhishek</h2>
      <p className="text-gray-400 mb-4">Connect with me on social media</p>

      <div className="flex justify-center gap-6">
        <motion.a
          href="https://github.com/AbhishekGoswam1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-gray-700 hover:text-black transition duration-300 text-3xl"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="text-blue-700 hover:text-blue-900 transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-blue-500 hover:text-blue-700 transition duration-300 text-3xl"
        >
          <FaTwitter />
        </motion.a>
      </div>
    </div>
  );
};

export default MadeBy;
