import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import ProfileSection from "../components/ProfileSection";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
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
    <div flex flex-col min-h-screen>
      <div className="flex-grow min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center p-5">
      <Navbar />
      <div className="w-full max-w-3xl rounded-xl p-5 mt-20">
        <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">Dashboard</h1>
        <ProfileSection />
        </div>

        {/* Task Section */}
        <AddTask setTasks={setTasks} tasks={tasks} user={user} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;