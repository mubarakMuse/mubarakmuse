"use client"

import React, { useEffect, useState } from 'react';

const TaskFlow = () => {

  const Task = ({ task, onDragStart }) => {
    return (
      <div
        draggable
        onDragStart={(e) => onDragStart(e, task.id)}
        className="bg-white p-2 my-2 rounded shadow-md cursor-pointer"
      >
        {task.content}
      </div>
    );
  };

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [buckets, setBuckets] = useState({
    "Important & Urgent": [],
    "Important & Not Urgent": [],
    "Unimportant & Urgent": [],
    "Unimportant & NotUrgent": [],
  });
  const [organizedTasks, setOrganizedTasks] = useState('');

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, bucketName) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const task = tasks.find((t) => t.id.toString() === taskId);
    if (task) {
      setBuckets((prevBuckets) => {
        const updatedBuckets = { ...prevBuckets };
        Object.keys(updatedBuckets).forEach((key) => {
          updatedBuckets[key] = updatedBuckets[key].filter((t) => t.id !== task.id);
        });
        updatedBuckets[bucketName] = [...updatedBuckets[bucketName], task];
        return updatedBuckets;
      });
    }
  };
  useEffect(() => {
    handleOrganizeTasks()
  }, [buckets]);

  const handleBulkAddTasks = () => {
    const tasksArray = newTask.split('\n').filter((task) => task.trim() !== '');
    const taskObjects = tasksArray.map((task, index) => ({
      id: tasks.length + index + 1,
      content: task.trim(),
    }));

    setTasks([...tasks, ...taskObjects]);
    setBuckets((prevBuckets) => ({
      ...prevBuckets,
      "Unimportant & NotUrgent": [...prevBuckets["Unimportant & NotUrgent"], ...taskObjects],
    }));
    setNewTask('');
  };

  const handleOrganizeTasks = () => {
    const allTasks = Object.values(buckets).reduce((accumulator, bucket) => accumulator.concat(bucket), []);

    const organizedTasks = allTasks.sort((a, b) => a.id - b.id);

    const organizedTaskList = Object.keys(buckets).map((bucketName) => {
      const tasksInBucket = buckets[bucketName];
      return `${bucketName}:\n${tasksInBucket.map((task) => task.content).join('\n')}`;
    }).join('\n\n');

    setOrganizedTasks(organizedTaskList);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-2xl mb-4 text-center">Task Manager</h1>
      <div className="w-full bg-blue-500 rounded p-4">
        <textarea
          rows="4"
          className="w-full p-2 border rounded"
          placeholder="Enter tasks (one per line)..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="mt-2 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 w-full"
          onClick={handleBulkAddTasks}
        >
          Add Tasks
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {Object.keys(buckets).map((bucketName) => (
          <div
            key={bucketName}
            className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 border rounded p-4  ${
              bucketName === 'Important & Urgent' ? 'bg-green-400' :
              bucketName === 'Important & Not Urgent' ? 'bg-blue-400' :
              bucketName === 'Unimportant & Urgent' ? 'bg-orange-400' : 'bg-red-400'
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, bucketName)}
          >
            <h2 className="mb-4 text-lg text-center">{bucketName}</h2>
            {buckets[bucketName].map((task) => (
              <Task key={task.id} task={task} onDragStart={handleDragStart} />
            ))}
          </div>
        ))}
      </div>
      <div className="w-full mt-4">
        <h2 className="text-xl mb-2">Organized Tasks:</h2>
        <textarea
          rows="6"
          className="w-full p-2 border rounded"
          value={organizedTasks}
          readOnly
        />
      </div>
    </div>
  );
};

export default TaskFlow;
