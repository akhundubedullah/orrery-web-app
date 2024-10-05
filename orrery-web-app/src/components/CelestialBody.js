import React from 'react';
import { useFrame } from '@react-three/fiber';

const CelestialBody = ({ position, radius, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default CelestialBody;
