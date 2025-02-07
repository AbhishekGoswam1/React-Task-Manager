import { FaTrash } from "react-icons/fa";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import EditTask from "./EditTask";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = async (id, completed) => {
    await updateDoc(doc(db, "tasks", id), { completed: !completed });
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !completed } : task)));
  };

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="bg-gray-900 p-4 rounded-lg flex items-center justify-between text-white">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id, task.completed)}
            className="mr-2 accent-blue-400"
          />
          <EditTask task={task} setTasks={setTasks} tasks={tasks} />
          <FaTrash onClick={() => deleteTask(task.id)} className="text-red-500 cursor-pointer text-lg" />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;