import React from 'react';
import * as THREE from 'three';

const Orbit = ({ semiMajorAxis, eccentricity }) => {
  const points = [];
  for (let i = 0; i < 360; i++) {
    const angle = (i * Math.PI) / 180;
    const radius = semiMajorAxis * (1 - eccentricity);
    points.push(new THREE.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle)));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 'white' });

  return <lineSegments geometry={geometry} material={material} />;
};

export default Orbit;
