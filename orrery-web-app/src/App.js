import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CelestialBody from './components/CelestialBody';
import Orbit from './components/Orbit';
import Controls from './components/Controls';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchNEOData } from './utils/fetchData';
import './styles/App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const neoData = await fetchNEOData();
      setData(neoData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Canvas camera={{ position: [0, 5, 15], fov: 75 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {data.map((neo) => (
            <CelestialBody key={neo.id} position={[neo.x, neo.y, neo.z]} radius={neo.size} color={neo.color} />
          ))}
          {data.map((neo) => (
            <Orbit key={neo.id} semiMajorAxis={neo.semiMajorAxis} eccentricity={neo.eccentricity} />
          ))}
        </Canvas>
      )}
      <Controls />
    </div>
  );
};

export default App;
