// src/TaskInput.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
    else{
        toast.error('Please input your task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        className="border border-gray-300 rounded-lg p-2 w-[355px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-20 ml-2"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
