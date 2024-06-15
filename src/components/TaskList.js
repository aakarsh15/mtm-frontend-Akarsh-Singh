import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
function TaskList({ tasks, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleEdit = (index) => {
    setIsEditing(index);
    setNewTask(tasks[index]);
  };

  const handleUpdate = (index) => {
    if (newTask.trim()) {
      updateTask(index, newTask);
      setIsEditing(null);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    deleteTask(index);
    if (isEditing === index) {
      setIsEditing(null);
      setNewTask('');
    }
  };

  return (
    <div className="task-list-container max-h-96 overflow-y-auto w-[445px]">
      <ul className="list-none p-0">
        {tasks.map((task, index) => (
          <li key={index} className="mb-4 flex items-center justify-between bg-white p-2 rounded-lg shadow-md">
            {isEditing === index ? (
              <div className="flex-grow flex items-center">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={() => handleUpdate(index)}
                  className="bg-green-500 text-white p-2 rounded-lg ml-2 shadow-md hover:bg-green-600 transition duration-200 mr-2"
                  title="Update"
                >
                  <MdOutlineSecurityUpdateGood />
                </button>
              </div>
            ) : (
              <div className="flex-grow overflow-auto whitespace-nowrap mr-4">
                <span>{task}</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              {isEditing !== index && (
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white p-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
                  title="Edit"
                >
                  <CiEdit />
                </button>
              )}
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 ml-2"
                title="Delete"
              >
                <MdDeleteForever />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
