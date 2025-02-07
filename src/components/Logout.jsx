import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = ({ setTasks }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    setTasks([]);
    navigate("/login");
  };

  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white px-4 py-2 mt-3 rounded w-full flex items-center justify-center gap-2 cursor-pointer"
    >
      <FaSignOutAlt /> Logout
    </button>
  );
};

export default Logout;