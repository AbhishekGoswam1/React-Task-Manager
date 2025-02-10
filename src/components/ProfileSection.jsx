import { useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { updatePassword, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";
import Input from "./Input";

const ProfileSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const user = auth.currentUser;

  const handlePasswordReset = async () => {
    try {
      if (user && newPassword) {
        await updatePassword(user, newPassword);
        alert("Password updated successfully!");
        setNewPassword("");
      } else {
        alert("Please enter a new password.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl cursor-pointer">
        <FaUserCircle />
      </button>
      
      {/* Popup */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-64 bg-gray-900 text-white rounded-lg shadow-lg p-4"
        >
          <p className="text-lg font-semibold">{user?.displayName || "User"}</p>
          <Input
            type="password"
            placeholder="New Password"
            className="w-full p-2 mt-2 text-gray-800 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handlePasswordReset} className="w-full bg-blue-500 mt-2 p-2 rounded cursor-pointer">
            Reset Password
          </button>
          <button onClick={handleLogout} className="w-full bg-red-500 mt-2 p-2 rounded cursor-pointer">
            Logout
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileSection;