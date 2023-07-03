import React, { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
export function Shirtcomp(props) {
  const { nodes, materials } = useGLTF("/shirt.glb");
  const [show, setshow] = React.useState(false);
    const groupRef = useRef();
  const Texture = useTexture({
    map: 'logo192.png',
  })
 
  console.log(console.log(nodes.T_Shirt_male.geometry))
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
      >
        
        <meshStandardMaterial color={props.color}attach="material" />
        </mesh>
        <mesh position={[0,0,0.1]}>
        <boxBufferGeometry attach="geometry" args={[0.1, .1, .08]}  />
        <meshStandardMaterial color={props.color}attach="material" {...Texture} />
        </mesh>
    </group>
  );
}

useGLTF.preload("/shirt.glb");