import { useState, useEffect } from 'react'

function App() {
  const [boards, setBoards] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/boards')
      .then(res => res.json())
      .then(data => setBoards(Array.isArray(data) ? data : []))
      .catch(() => setBoards([]))
  }, [])

  return (
    <div style={{padding:'2rem', fontFamily:'Arial'}}>
      <h1>🚀 Kanban Board — Forge2</h1>
      <div style={{display:'flex', gap:'1rem'}}>
        <div style={{border:'1px solid #ccc', padding:'1rem', width:'250px', borderRadius:'8px', background:'#f9f9f9'}}>
          <h3>📋 To Do</h3>
          {boards.length === 0 ? <p>No cards yet</p> : boards.map(b => <div key={b.id} style={{background:'white', padding:'8px', margin:'4px 0', borderRadius:'4px', border:'1px solid #ddd'}}>{b.name || b.title}</div>)}
        </div>
        <div style={{border:'1px solid #ccc', padding:'1rem', width:'250px', borderRadius:'8px', background:'#f9f9f9'}}>
          <h3>⚡ In Progress</h3>
        </div>
        <div style={{border:'1px solid #ccc', padding:'1rem', width:'250px', borderRadius:'8px', background:'#f9f9f9'}}>
          <h3>✅ Done</h3>
        </div>
      </div>
    </div>
  )
}

export default App