import React, { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore'
import Input from '../components/Input'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../components/Navbar'

const Dashboard = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth); // Get the current user

    // Fetch all tasks
    useEffect(() => {
        if (user) {
            const fetchTasks = async () => {
                const q = query(collection(db, "tasks"), where("userId", "==", user.uid)); // Fetch only this user's tasks
                const querySnapshot = await getDocs(q);
                setTasks(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
            }
            fetchTasks();
        } else {
            setTasks([]); // Clear the tasks when user logs out
        }
    }, [user]); // runs when user changes

    // Add a new task
    const addTask = async () => {
        if (!task || !user) return;
        const docRef = await addDoc(collection(db, "tasks"), { text: task, userId: user.uid });
        // Update UI immediately
        setTasks([...tasks, { id: docRef.id, text: task, userId: user.uid }]);
        setTask(""); // Clear the input field
        console.log("Task added successfully: " + task);
    };
    

    // Delete a task
    const deleteTask = async (id) => {
        await deleteDoc(doc(db, 'tasks', id));
        setTasks(tasks.filter(taskItem => taskItem.id !== id)); // Remove the task from the list
        console.log('Task deleted successfully');
    }

    // Logout the user
    const handleLogout = async () => {
        await signOut(auth);
        setTasks([]); // Clear the tasks when user logs out
        navigate('/login');
        console.log('Logged out successfully');
    }

  return (
    <>
        <Navbar />
       <div>
        <h1>Dashboard</h1>
        <Input 
            type="text" 
            placeholder='Enter Task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
       </div>
       <div>
        <ul>
            {tasks.map((taskItem) => (
            <li key={taskItem.id}>
            {taskItem.text}
                <button onClick={() => deleteTask(taskItem.id)}>Delete</button>
            </li>
            ))}
        </ul>
       </div>

        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard