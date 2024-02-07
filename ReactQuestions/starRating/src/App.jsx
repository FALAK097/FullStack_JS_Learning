import { useState } from 'react';
import './App.css';

function App() {
  const [starSelected, setStarSelected] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  return (
    <div className="App">
      <h1>Star Rating!</h1>
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          return (
            <span
              key={index}
              className={`${index + 1 <= starSelected ? 'selected' : ''}`}
              onClick={() => setStarSelected(index + 1)}
              onMouseOver={() => setHoverStar(index + 1)}
              onMouseOut={() => setHoverStar(0)}>
              &#9733;
            </span>
          );
        })}
      </div>
      <p>Rating Count: {starSelected}</p>
      <p>Hover Rating: {hoverStar}</p>
    </div>
  );
}

export default App;
