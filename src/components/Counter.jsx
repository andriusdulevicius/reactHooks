import React, { useState } from 'react';
import useDocumentTitle from './../hook/useDocumentTitle';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Bob');

  // custom user hook
  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <div>
      <h2>Counter of {name}:</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName('James')}>Set name to James</button>
      <h3>{count}</h3>
      <input type='text' placeholder='enter Name' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
