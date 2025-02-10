import { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Input from "./Input";

const EditTask = ({ task, setTasks, tasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(task.text);

  const saveTask = async () => {
    await updateDoc(doc(db, "tasks", task.id), { text: editingText });
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, text: editingText } : t)));
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between w-[100%] gap-2 px-2">
      {isEditing ? (
        <>
          <Input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <FaSave onClick={saveTask} className="text-green-500 cursor-pointer text-lg" />
        </>
      ) : (
        <>
          <span className={task.completed ? "line-through" : ""}>{task.text}</span>
          <FaEdit onClick={() => setIsEditing(true)} className="text-blue-500 cursor-pointer text-lg" />
        </>
      )}
    </div>
  );
};

export default EditTask;