import "./App.css";
import React, { useState, useRef, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Canvas, useLoader, useThree, extend, useFrame } from '@react-three/fiber';
import { TextureLoader, Object3D, InstancedMesh, Box3, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OrbitControls, Torus, PerspectiveCamera, Environment, RandomizedLight, AccumulativeShadows } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';

import { SketchPicker } from 'react-color';




function Plane() {
  const spotLightRef = useRef();


  let screenwidth = window.innerWidth;
  let screenheight = window.innerHeight;
  return (
    <>
      <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 15, -40]}>
        <planeBufferGeometry attach="geometry" args={[screenwidth, screenheight]} />
        <meshPhongMaterial attach="material" color="gray" />
      </mesh>

    </>
  );
}










function Shirt(props) {
  // console.log(props.color)
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, '/shirt.gltf')
  const { camera } = useThree();
  const [onshirt, setonshirt] = useState(true)


  console.log(gltf.scene);
  useEffect(() => {
   


  }, [])
  useEffect(() => {
    // console.log("mudit tiwari")
    const box = new Box3().setFromObject(gltf.scene);
    let center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    // size.multiplyScalar(0)
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let distance = Math.abs(maxDim / Math.sin(fov / .8));
    // console.log(size)
    camera.position.copy(center);
    camera.position.z += distance;
    camera.lookAt(center);
    camera.updateMatrixWorld();
    console.log(props.color)
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.color.set(props.color.hex);
      }

    });
   

  }, [props])
  return (
    <>
      <group  >
        <primitive  object={gltf.scene} receiveShadow={true} position={[0, -250, 0]} scale={[2, 2, 2]} castShadow={true} />
        <meshPhongMaterial attach="material" color={props.color} />
        <OrbitControls args={[camera]} enabled={onshirt} />
      </group>

    </>
  );
}

function Scene(props) {



  const { camera } = useThree();
  const shadows = useRef();
  return (
    <>
      <ambientLight />
      {/* <pointLight intensity={0.9} castShadow={true}  position={[0,0, 100]} /> */}
      <directionalLight intensity={0.8} position={[1, 3, 2]} />
      <directionalLight intensity={0.8} position={[1, 3, -2]} />
      <directionalLight intensity={0.8} position={[1, -3, 2]} />
      <directionalLight intensity={0.8} position={[1, -3, -2]} />
      <directionalLight intensity={0.8} position={[-1, 3, 2]} />
      <directionalLight intensity={0.8} position={[-1, 3, -2]} />
      <directionalLight intensity={0.8} position={[-1, -3, 2]} />
      <directionalLight intensity={0.8} position={[-1, -3, -2]} />
      {/* <Environment preset="city" /> */}
      <group>
        <Suspense fallback={null}>
          <Shirt color={props.color} />
        </Suspense>

        
      </group>
      {/* <Plane /> */}
    </>
  );
}

export default function App() {
  const [newcolor, setnewcolor] = useState({ 'hex': '#000000' })
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
