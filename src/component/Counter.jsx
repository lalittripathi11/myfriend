import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h2>Count:{count}</h2>
        
              <button onClick={() => setCount(count >= 10 ? 10 : count + 1)}>Increment</button>
        <button onClick={() => setCount(count <= 0 ? 0 : count - 1)}>Decrement</button>
    </div>
  )
}