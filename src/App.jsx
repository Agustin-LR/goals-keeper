import { useState } from 'react'


const defaultTasks = [
  { id: 1, name: 'Task 1', done: true, emoji: '🧨' },
  { id: 5, name: 'Task 5', done: true, emoji: '👀' },
]
function App() {
  /* aca */
  const [tasks, setTasks] = useState(defaultTasks);
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

  const handleStatusChange = (id) => {
    console.log('cambiando estado de la tarea', id);
    const newTasks = tasks.map(t => {
      if (t.id === id) {
        t.done = !t.done;
      }
      return t;
    });
    setTasks(newTasks);
  }

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
              <div key={t.id} class={`item ${t.done ? 'done' : 'not-done'}`}>
                <p>#{t.id} <strong>{t.name}</strong> {t.emoji}</p>
                <div onClick={() => handleStatusChange(t.id)} class="icon">{t.done ? "✅" : "❌"}</div>
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
