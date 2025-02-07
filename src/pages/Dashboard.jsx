import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FaUser } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Logout from "../components/Logout";
import ChangePassword from "../components/ChangePassword";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        setTasks(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      };
      fetchTasks();
    } else {
      setTasks([]);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-5">
      <Navbar />
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 mt-15">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">Dashboard</h1>

        {/* Profile Section */}
        <div className="mb-4 cursor-pointer flex items-center gap-2" onClick={() => setProfileOpen(!profileOpen)}>
          <FaUser className="text-blue-500" />
          <span className="text-lg font-semibold">Profile</span>
        </div>
        {profileOpen && (
          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <p className="mb-2"><strong>Email:</strong> {user?.email}</p>
            <ChangePassword />
            <Logout setTasks={setTasks} />
          </div>
        )}

        {/* Task Section */}
        <AddTask setTasks={setTasks} tasks={tasks} user={user} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Dashboard;