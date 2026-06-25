import { useState, useEffect } from 'react'

function App() {
  const [boards, setBoards] = useState([])

  useEffect(() => {
    fetch('https://forge2-qualifier-kartike.onrender.com/api/boards')
      .then(res => res.json())
      .then(data => {
        const withStatus = data.map(b => ({
          ...b,
          status: 'todo'
        }))
        setBoards(withStatus)
      })
  }, [])

  const moveBoard = (id) => {
    setBoards(prev =>
      prev.map(board => {
        if (board.id !== id) return board

        if (board.status === 'todo')
          return { ...board, status: 'inprogress' }

        if (board.status === 'inprogress')
          return { ...board, status: 'done' }

        return board
      })
    )
  }

  const addBoard = async () => {
    const response = await fetch(
      'https://forge2-qualifier-kartike.onrender.com/api/boards',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: 'Forge2 Task',
          description: 'Created from frontend',
        }),
      }
    )

    const data = await response.json()

    setBoards(prev => [
      ...prev,
      {
        ...data,
        status: 'todo',
      },
    ])
  }

  const todo = boards.filter(b => b.status === 'todo')
  const progress = boards.filter(b => b.status === 'inprogress')
  const done = boards.filter(b => b.status === 'done')

  const columnStyle = {
    border: '1px solid #ccc',
    padding: '1rem',
    width: '300px',
    borderRadius: '10px',
    background: '#f5f5f5',
    color: 'black',
    minHeight: '400px'
  }

  const cardStyle = {
    background: 'white',
    color: 'black',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    cursor: 'pointer'
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Kanban Board - Forge2</h1>

      <button
        onClick={addBoard}
        style={{
          padding: '10px 16px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        Create Task
      </button>

      <p>
        Click any card to move it →
        To Do → In Progress → Done
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={columnStyle}>
          <h2>To Do ({todo.length})</h2>

          {todo.map(board => (
            <div
              key={board.id}
              style={cardStyle}
              onClick={() => moveBoard(board.id)}
            >
              {board.name}
            </div>
          ))}
        </div>

        <div style={columnStyle}>
          <h2>In Progress ({progress.length})</h2>

          {progress.map(board => (
            <div
              key={board.id}
              style={cardStyle}
              onClick={() => moveBoard(board.id)}
            >
              {board.name}
            </div>
          ))}
        </div>

        <div style={columnStyle}>
          <h2>Done ({done.length})</h2>

          {done.map(board => (
            <div
              key={board.id}
              style={cardStyle}
            >
              {board.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App