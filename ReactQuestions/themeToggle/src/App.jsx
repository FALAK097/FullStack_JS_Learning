import { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for user preference
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Update local storage when dark mode changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      style={{
        background: darkMode ? '#282c36' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s ease',
      }}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <label>
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        Toggle
      </label>
      <p>This is some example content.</p>
    </div>
  );
};

export default App;
