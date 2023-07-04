import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
export function Shirtcomp(props) {
  const { nodes, materials } = useGLTF("/shirt.glb");
  const [show, setshow] = React.useState(false);
  const groupRef = useRef();
  const logo = useTexture({
    map: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  })
  const Textures = [useTexture({
    map: 'textures/texture.png',
  }),useTexture({
    map: 'textures/texture1.jpg',
  }),useTexture({
    map: 'textures/texture2.jpg',
  }),useTexture({
    map: 'textures/texture3.jpg',
  }),useTexture({
    map: 'textures/texture4.jpg',
}),useTexture({
  map: 'textures/texture5.png',
})]

  console.log(console.log(nodes.T_Shirt_male.geometry))
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
      >

        <meshStandardMaterial color={props.color} attach="material" {...Textures[props.texture]} />
      </mesh>
      <mesh position={[0, 0, 0.1]}>
        <boxBufferGeometry attach="geometry" args={[0.1, .1, .08]} />
        <meshStandardMaterial attach="material" {...logo} color={props.color} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/shirt.glb");