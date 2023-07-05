import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
export function Shirtcomp(props) {
  const { nodes, materials } = useGLTF("/shirt.glb");
  const groupRef = useRef();
  // console.log(props.logo);

  const Textures = [useTexture({
    map: 'textures/texture.png',
  }), useTexture({
    map: 'textures/texture1.jpg',
  }), useTexture({
    map: 'textures/texture2.jpg',
  }), useTexture({
    map: 'textures/texture3.jpg',
  }), useTexture({
    map: 'textures/texture4.jpg',
  }), useTexture({
    map: 'textures/texture5.png',
  })]
  const Logos = [useTexture({
    map: 'logos/logo.jpg',
  }), useTexture({
    map: 'logos/logo1.jpg',
  }), useTexture({
    map: 'logos/logo2.jpg',
  }), useTexture({
    map: 'logos/logo3.jpg',
  }), useTexture({
    map: 'logos/logo4.jpg',
  }), useTexture({
    map: 'logos/logo5.jpg',
  })]
  console.log(Logos);
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
      >

        {props.texture != -1 && <meshStandardMaterial color={props.color} attach="material" {...Textures[props.texture]} />}
        {props.texture == -1 && <meshStandardMaterial color={props.color} attach="material" />}
      </mesh>
        {props.logo !=-1 && <mesh position={[0, 0, 0.1]}>
          <boxBufferGeometry attach="geometry" args={[0.1, .1, .08]} />
          <meshStandardMaterial attach="material" {...Logos[props.logo]}  />
        </mesh>}
    </group>
  );
}

useGLTF.preload("/shirt.glb");