import "./App.css";
import React, { useState, useRef, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Canvas,} from '@react-three/fiber';
import { OrbitControls, MeshReflectorMaterial,
  PresentationControls,
  Stage} from '@react-three/drei';


import { SketchPicker } from 'react-color';
import { Shirt } from "./Shirt";












function Scene(props) {

  return (
    <>
      
      
      <PresentationControls
        speed={1.5}
        global
        polar={[0,0]}
        
      >
        <Stage environment="studio" intensity={0.9} castShadow={false}>
          <Shirt color={props.color.hex} />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-270,0]}>
          <planeGeometry args={[1000, 1000]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
       
      </PresentationControls>
      <OrbitControls enableZoom={true} minPolarAngle={Math.PI / 2}
  maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default function App() {
  const [newcolor, setnewcolor] = useState({ 'hex': '#ffffff' })
  return (
    <>
      <div className='mt-0' style={{ 'width': '100%', 'height': '80vh' }}>
        <Canvas shadows>
          <Scene color={newcolor} />
          {/* <Environment preset="city" /> */}

        </Canvas>
        <SketchPicker disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

          setnewcolor(color)
        }} onChange={((color, event) => {
          setnewcolor(color)
        })} />
      </div>
      
    </>
  );
}

// work to do next in this project
// 1.add color picker in the side bar
// 2.add texture picker in the sidebar

