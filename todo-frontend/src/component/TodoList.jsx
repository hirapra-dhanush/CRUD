import { useEffect, useState } from "react";
import API from "../api";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/all");
      setTasks(res.data.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  const deleteTask = async (id) => {
    await API.delete(`/delete/${id}`);
    fetchTasks();
  };

  const updateTask = async (id, newTask) => {
    await API.put(`/update/${id}`, { task: newTask });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((t) => (
        <div key={t._id} style={{ marginBottom: "0.5rem" }}>
          <input
            defaultValue={t.task}
            onBlur={(e) => updateTask(t._id, e.target.value)}
          />
          <button onClick={() => deleteTask(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
