import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

export function Croptopcomp(props) {
  const { nodes, materials } = useGLTF("/croptop.gltf");
  const Texture = useTexture({
    map: 'logo192.png',
  })
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BellyButtonLongSleeveShirt.geometry}
        // material={nodes.BellyButtonLongSleeveShirt.material}
      >
         <meshStandardMaterial attach="material"  color={props.color}/>
        
     </mesh>
     <mesh position={[0,1430,75]}>
        <boxBufferGeometry attach="geometry" args={[100, 100, 100]}  />
        <meshStandardMaterial color={props.color}attach="material" {...Texture}  />
        </mesh>
    </group>
  );
}

useGLTF.preload("/croptop.gltf");