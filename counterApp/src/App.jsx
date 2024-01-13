import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
    // For multiple value increment it is passed as callback
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="text">Counter App</div>
      <span>{count}</span>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
