import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // Sirf ek baar load hoga
    fetch('http://localhost:8000/api/boards')
      .then(res => res.json())
      .then(data => setBoards(data))
      .catch(err => console.log("Backend offline, data will load once server responds"));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 Kanban Board (Forge 2)</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px', borderRadius: '8px' }}>
          <h3>To Do</h3>
          {boards.length === 0 ? <p>Loading cards...</p> : boards.map(b => <div key={b.id}>{b.title}</div>)}
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px', borderRadius: '8px' }}>
          <h3>In Progress</h3>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px', borderRadius: '8px' }}>
          <h3>Done</h3>
        </div>
      </div>
    </div>
  )
}

export default App