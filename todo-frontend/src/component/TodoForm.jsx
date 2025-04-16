import { useState } from 'react';
import API from '../api';

function TodoForm({ onTaskAdded }) {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await API.post('/create', { task });
      setTask('');
      onTaskAdded(); 
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: '1rem' }}>
      <input
        type='text'
        placeholder='Enter a task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default TodoForm;
