import React, { Suspense } from 'react';
import './App.css';
// Components
import { Canvas } from 'react-three-fiber';
// Model
// import Model from './components/three/PyramidScene';

function App() {
  return (
    <Canvas
        colorManagement
        shadowMap
        camera={{position:[0,0,120], fov: 70}}>
          <Suspense fallback={null}>
            {/* <Model/> */}
          </Suspense>
    </Canvas>
  );
}

export default App;
