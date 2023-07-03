import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

export function Croptopcomp(props) {
  const { nodes, materials } = useGLTF("/croptop.gltf");
  const logo = useTexture({
    map: 'logo192.png',
  })
  const Texture = useTexture({
    map: 'texture.jpg',
  })
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BellyButtonLongSleeveShirt.geometry}
        // material={nodes.BellyButtonLongSleeveShirt.material}
      >
         <meshStandardMaterial attach="material"  color={props.color} {...Texture}/>
        
     </mesh>
     <mesh position={[0,1430,75]}>
        <boxBufferGeometry attach="geometry" args={[100, 100, 100]}  />
        <meshStandardMaterial color={props.color}attach="material" {...logo}  />
        </mesh>
    </group>
  );
}

useGLTF.preload("/croptop.gltf");