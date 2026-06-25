import { useState, useEffect } from 'react'

function App() {
  const [boards, setBoards] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(null)

  const API_URL = 'https://forge2-qualifier-kartike.onrender.com/api/boards'

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBoards(Array.isArray(data) ? data : []))
      .catch(err => {
        console.error(err)
        setBoards([])
      })
  }, [])

  const createBoard = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `Demo Board ${Date.now()}`,
          description: 'Created from frontend'
        })
      })

      const newBoard = await response.json()

      setBoards(prev => [...prev, newBoard])
      setSelectedBoard(newBoard)
    } catch (error) {
      console.error(error)
      alert('Failed to create board')
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Kanban Board - Forge2</h1>

      <button
        onClick={createBoard}
        style={{
          padding: '10px 16px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        Add Demo Board
      </button>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            width: '250px',
            borderRadius: '8px',
            background: '#f9f9f9'
          }}
        >
          <h3>To Do ({boards.length})</h3>

          {boards.length === 0 ? (
            <p>No boards yet</p>
          ) : (
            boards.map(board => (
              <div
                key={board.id}
                onClick={() => setSelectedBoard(board)}
                style={{
                  background: 'white',
                  padding: '10px',
                  margin: '8px 0',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  cursor: 'pointer'
                }}
              >
                <strong>{board.name}</strong>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            width: '250px',
            borderRadius: '8px',
            background: '#f9f9f9'
          }}
        >
          <h3>In Progress</h3>
          <p>Coming Soon</p>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            width: '250px',
            borderRadius: '8px',
            background: '#f9f9f9'
          }}
        >
          <h3>Done</h3>
          <p>Coming Soon</p>
        </div>
      </div>

      {selectedBoard && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            background: '#fafafa'
          }}
        >
          <h2>{selectedBoard.name}</h2>
          <p>{selectedBoard.description}</p>
          <p>
            <strong>ID:</strong> {selectedBoard.id}
          </p>
        </div>
      )}
    </div>
  )
}

export default App