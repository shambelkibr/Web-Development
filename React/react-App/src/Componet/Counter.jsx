import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
