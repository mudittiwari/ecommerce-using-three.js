import "./App.css";
import React, { useState, useRef, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Canvas, useLoader, useThree, extend, useFrame } from '@react-three/fiber';
import { TextureLoader, Object3D, InstancedMesh, Box3, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OrbitControls, Torus, PerspectiveCamera, Environment,RandomizedLight,AccumulativeShadows } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
// import logo from './index.png';
// import bump from './bump.jpeg';
// import shirt from './assets/shirt.gltf';
import { SketchPicker } from 'react-color';

// import { OBJLoader }from 'three/examples/jsm/loaders/OBJLoader';

// extend({ OrbitControls })
// function Cube()
// {
//   return (
//     <>
//       <mesh rotation={[10 , 10 ,0]} position={[0,0,0]}>
//         <boxBufferGeometry attach="geometry" args={[4,4,3]} />
//         <meshStandardMaterial attach="material" color={props.color} />
//       </mesh>
//     </>
//   );
// }


// function Cube(props) {
//   const [isbig, setisbig] = useState(false);
//   const ref = useRef();
//   const { size } = useSpring({
//     size: isbig ? [2, 2, 2] : [1, 1, 1],
//   })
//   const loader = useLoader(TextureLoader, logo);
//   const loader2 = useLoader(TextureLoader, bump);
//   // const size=isbig?4:2;
//   useFrame(() => {
//     // we can use this when we want to apply some animation 60fps
//     // useref is used to change the value of some component without actually updating the whole component of we just skip the react re-rendering
//     ref.current.rotation.x += 0.01;
//     ref.current.rotation.y += 0.01;
//   })
//   return (
//     <>
//       <animated.mesh castShadow={true} receiveShadow={true}  {...props} onClick={() => {
//         setisbig(!isbig);
//       }} ref={ref} scale={size}>
//         <boxBufferGeometry attach="geometry" args={[2,2,2]} />
//         {/* <sphereBufferGeometry attach="geometry" args={[1, 8, 6]} /> */}
//         {/* we can create other geomertry using the same syntax just change the name of the primitive like cylinderbuffergeometry and change the args according to the requirements by visiting the three.js documentation */}
//         <meshPhongMaterial bumpMap={loader2} map={loader} color="gold" roughness={1} metalness={0.5} attach="material" flatShading={true} shineness={80} />
//         {/* we can use other maps like displacement map to see some other cool stuff */}
//       </animated.mesh>
//     </>
//   );
// }

function Plane() {
  const spotLightRef = useRef();

  // Rotate the spot light in the scene
  // useFrame(() => {
  //   spotLightRef.current.rotation.y += 0.01;
  // });
  let screenwidth = window.innerWidth;
  let screenheight = window.innerHeight;
  return (
    <>
      <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 15, -40]}>
        <planeBufferGeometry attach="geometry" args={[screenwidth, screenheight]} />
        <meshPhongMaterial attach="material" color="gray" />
      </mesh>
      {/* <spotLight
        ref={spotLightRef}
        castShadow
        position={[0,-150, 150]} // Adjust the position of the light
        intensity={0.8}
        angle={Math.PI / 4}
        penumbra={0.3}
        decay={1}
        distance={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={10}
        shadow-camera-far={200}
      /> */}
    </>
  );
}


// function Scene() {
//   // const { camera, gl: { domElement } } = useThree()
//   return (
//     <>
//       <ambientLight />
//       <directionalLight castShadow={true} intensity={0.8} position={[0, 3, -3]} />
//       {/* suspense is used to show texture on our shape */}
//       <Suspense>
//         <Cube rotation={[10, 10, 0]} position={[0, 0, 0]} />
//       </Suspense>
//       <Suspense>
//         <Cube rotation={[10, 10, 0]} position={[2, 2, 0]} />
//       </Suspense>
//       <Torus position={[-4, 3, 0]} >
//         <meshPhongMaterial roughness={1} metalness={0.5} attach="material" color="gold" flatShading={true} shineness={80} />
//       </Torus>
//       <Plane />
//       <OrbitControls />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Canvas shadows>
//         <Scene />
//       </Canvas>
//     </>
//   );
// }





// instanced mesh example

// function Boxes() {
//   const ref = useRef();
//   const tempObject = new Object3D();
//   useFrame(() => {
//     for (let i = 0; i < 1; i++) {
//       for (let j = 0; j < 1; j++) {
//         for (let k = 0; k < 1; k++) {
//           const id = i * 100 + j * 10 + k;
//           tempObject.position.set(1 - i, 1 - j, 1 - k);
//           tempObject.updateMatrix();
//           ref.current.setMatrixAt(id, tempObject.matrix);
//         }
//       }
//     }
//     // ref.current.instanceMatrix.needsUpdate = true; 
//   });

//   return (
//     <instancedMesh ref={ref} args={[null, null, 8]}>
//       <boxBufferGeometry attach="geometry" args={[1.7, 0.7, 0.7]} />
//       <meshPhongMaterial attach="material" color="teal" />
//     </instancedMesh>
//   );
// }


function Shirt(props) {
  // console.log(props.color)
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, '/shirt.gltf')
  const { camera } = useThree();

  // Calculate the bounding box of the loaded model


  useEffect(() => {
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


  }, [])
  useEffect(() => {
    // console.log("mudit tiwari")
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        // Set the color of the material
        // console.log(props.color)
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.color.set(props.color.hex);
      }

    });

  }, [props])
  return (
    <>
      <primitive object={gltf.scene} receiveShadow={true} position={[0, -250, 0]} scale={[2, 2, 2]} castShadow={true} />
      <meshPhongMaterial attach="material" color={props.color} />

    </>
  );
}

function Scene(props) {

  // const controlsRef = useRef();
  // const { camera, gl } = useThree();

  // useFrame(() => {
  //   controlsRef.current.update();
  // });


  const { camera } = useThree();
  const shadows = useRef();
  return (
    <>
      <ambientLight />
      {/* <pointLight intensity={0.9} castShadow={true}  position={[0,0, 100]} /> */}
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[0,0, 100]}
      />
      <directionalLight intensity={0.8} position={[1, 3, 2]}  />
      <directionalLight intensity={0.8} position={[1, 3, -2]} />
      <directionalLight intensity={0.8} position={[1, -3, 2]} />
      <directionalLight intensity={0.8} position={[1, -3, -2]} />
      <directionalLight intensity={0.8} position={[-1, 3, 2]} />
      <directionalLight intensity={0.8} position={[-1, 3, -2]} />
      <directionalLight intensity={0.8} position={[-1, -3, 2]} />
      <directionalLight intensity={0.8} position={[-1, -3, -2]} />
      {/* <Environment preset="city" /> */}
      <Suspense fallback={null}>
        <Shirt color={props.color} />
      </Suspense>
      <Plane />
      <OrbitControls args={[camera]} />
      {/* <OrbitControls /> */}
      {/* <orbitControls ref={controlsRef} args={[camera, gl.domElement]} /> */}
    </>
  );
}

export default function App() {
  const [newcolor, setnewcolor] = useState('yellow')
  return (
    <>
      <div className='mt-0' style={{ 'width': '100%', 'height': '80vh' }}>
        <Canvas shadows>
          <Scene color={newcolor} />
          {/* <PerspectiveCamera
        makeDefault
        position={[0, 0, 0]}
        fov={60}
        zoom={0.8}
      /> */}
      <Environment preset="city" />

          <OrbitControls />
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
