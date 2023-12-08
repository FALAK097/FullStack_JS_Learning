import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      if (editedTask !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editedTask] = {
          text: newTask,
          completed: tasks[editedTask].completed,
        };
        setTasks(updatedTasks);
        setEditedTask(null);
      } else {
        setTasks([...tasks, { text: newTask, completed: false }]);
      }
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditedTask(index);
    setNewTask(tasks[index].text);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Add/Edit a Task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          {editedTask !== null ? 'Edit' : 'Add'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={task} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
