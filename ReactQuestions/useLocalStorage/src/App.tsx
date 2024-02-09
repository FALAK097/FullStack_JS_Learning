import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const App = () => {
  const [value, setValue] = useState('');
  const { setItem, getItem, removeItem } = useLocalStorage('value');

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-8 rounded shadow-md w-96">
        <h1 className="mb-4 text-3xl font-bold text-center">useLocalStorage</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <div className="flex justify-center">
          <button onClick={() => setItem(value)} className="mr-2">
            Set
          </button>
          <button onClick={() => console.log(getItem())} className="mr-2">
            Get
          </button>
          <button onClick={removeItem}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default App;
