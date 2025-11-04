import React from 'react'

function Count() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f5f5f5'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Counter</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            marginRight: '10px',
            background: '#e74c3c',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >-</button>
        <span
          style={{
            margin: '0 10px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#555'
          }}
        >{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            marginLeft: '10px',
            background: '#2ecc71',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >+</button>
      </div>
    </div>
  )
}

export default Count