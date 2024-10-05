import React from 'react';
import './Controls.css';

const Controls = () => {
  const handleZoomIn = () => {
    const canvas = document.querySelector('canvas');
    const camera = canvas.getElementsByTagName('canvas')[0];
    camera.position.z -= 1;
  };

  const handleZoomOut = () => {
    const canvas = document.querySelector('canvas');
    const camera = canvas.getElementsByTagName('canvas')[0];
    camera.position.z += 1;
  };

  return (
    <div className="controls">
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
};

export default Controls;
