import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const defaultTasks = [
  { id: 1, name: 'Task 1', done: true, emoji: '🧨' },
  { id: 5, name: 'Task 5', done: true, emoji: '👀' },
]
function App() {
  /* aca */
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleAddNewTask = () => {
    const createdTask = {
      id: tasks.length + 1,
      name: name,
      done: false,
      emoji: emoji
    };
    const newTasks = [...tasks, createdTask];
    setTasks(newTasks);
  };

  const handleTextChange = (e) => {
    setName(e.target.value);
  }

  const handleEmojiChange = (e) => {
    setEmoji(e.target.value);
  }

  const supabaseUrl = 'https://egzjoaazfegtkolimoji.supabase.co'
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnempvYWF6ZmVndGtvbGltb2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxMTI2ODEsImV4cCI6MjAyMzY4ODY4MX0.gXHZUm5KvBdYr1lvy9wYSTb8Qk8zsrrR-NkRF1Hv7XM"
  const supabase = createClient(supabaseUrl, supabaseKey)

  const handleStatusChange = (id) => {
    const task = tasks.find(t => t.id === id);
    task.finished_at = task.finished_at ? null : new Date().toISOString();
    supabase.from('tasks').upsert([task]).select().then(response => {
      setTasks(response.data);
    });
  }

  const { data } = supabase.from('tasks').select().then(response => {
    setTasks(response.data);
  })


  return (
    <>
      <h1>Tasks</h1>
      <input type="text" placeholder='Nombre' onChange={handleTextChange} />
      <input type="text" placeholder='Emoji' onChange={handleEmojiChange} />
      <button onClick={handleAddNewTask}>Agregar Task</button>
      <hr />
      <section>
        {
          tasks.map(t => {
            return (
              <div key={t.id} className={`item ${t.finished_at ? 'done' : 'not-done'}`}>
                <p>#{t.id} <strong>{t.name}</strong></p>
                <div onClick={() => handleStatusChange(t.id)} className="icon">{t.finished_at ? "✅" : "❌"}</div>
              </div>
            );
          })
        }
      </section>
    </>
  );
}
/* aca */
export default App
