import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

export function Shirt(props) {
  const { nodes, materials } = useGLTF("/croptop.gltf");
  const Texture = useTexture({
    // aoMap: 'textures/Stylized_Rocks_002_ambientOcclusion.jpg',
    // normalMap: 'textures/Stylized_Rocks_002_normal.jpg',
    // roughnessMap: 'textures/Stylized_Rocks_002_roughness.jpg',
    map: 'texture.jpg',
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BellyButtonLongSleeveShirt.geometry}
        // material={nodes.BellyButtonLongSleeveShirt.material}
      >
         <meshStandardMaterial attach="material" {...Texture} color={props.color}/>
        
     </mesh>
    </group>
  );
}

useGLTF.preload("/croptop.gltf");