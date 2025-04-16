import { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo List</h1>
      <TodoForm onTaskAdded={() => setRefresh(!refresh)} />
      <TodoList key={refresh} />
    </div>
  );
}

export default App;
