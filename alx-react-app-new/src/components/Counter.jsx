// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  // Initialize state for the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
