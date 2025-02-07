import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Input from "./Input";

const AddTask = ({ setTasks, tasks, user }) => {
  const [task, setTask] = useState("");

  const addTask = async () => {
    if (!task.trim() || !user) return;
    const docRef = await addDoc(collection(db, "tasks"), {
      text: task,
      completed: false,
      userId: user.uid,
    });
    setTasks([...tasks, { id: docRef.id, text: task, completed: false }]);
    setTask("");
  };

  return (
    <div className="flex gap-2 mt-3">
      <Input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Add
      </button>
    </div>
  );
};

export default AddTask;
