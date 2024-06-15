// src/App.js
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // Make sure to import Tailwind CSS


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    toast.success('Task added successfully');
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? newTask : task
    );
    setTasks(updatedTasks);
    toast.success('Task updated successfully');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.success('Task deleted successfully');
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center bg-custom-blue">
      <div className="w-full h-20 mb-2 flex items-center justify-center ">
        <img src="Favicon.png" alt="Itinerary Planner Logo" className="h-full object-cover rounded-xl" />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ToastContainer />
    </div>
  );
}

export default App;
