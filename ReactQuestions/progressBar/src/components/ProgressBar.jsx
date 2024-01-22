/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const ProgressBar = ({ value, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (percent >= 100) {
      onComplete();
    }
  }, [onComplete, percent, value]);

  return (
    <div className="progress">
      <div
        className="progress-text"
        style={{ color: percent > 49 ? 'white' : 'black' }}>
        <span>{percent.toFixed()}%</span>
      </div>
      <div
        className="progress-bar"
        // style={{ width: `${percent}%` }}
        // better way to style for more optimal performance
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: 'left',
        }}
        role="progressbar"
        aria-valuenow={percent.toFixed()}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;
