import React, { useState, useRef, Suspense, useEffect } from 'react';
import { } from 'react-router-dom';
import { Canvas, } from '@react-three/fiber';
import {
  OrbitControls, MeshReflectorMaterial,
  PresentationControls,
  Stage
} from '@react-three/drei';
import { SketchPicker } from 'react-color';
import { Shirtcomp } from './3Dcomps/Shirtcomp';
import { AmbientLight } from 'three';


function Scene(props) {

  return (
    <>
      <Stage environment={null} intensity={1} castShadow={false} >
        <Shirtcomp color={props.color.hex} />
      </Stage>
      <OrbitControls enableZoom={true} minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default function Shirt(props) {
  const [newcolor, setnewcolor] = useState({ 'hex': '#ffffff' })
  return (
    <>
      <div className='hidden md-block'>
        <div className='mt-0 flex' style={{ 'width': '100%', 'height': '100vh', 'maxHeight': '100vh' }}>
          <div className="w-1/4 p-2">
            <SketchPicker width="50%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

              setnewcolor(color)
            }} onChange={((color, event) => {
              setnewcolor(color)
            })} />
          </div>
          <div className="w-3/4" style={{ 'height': '80%' }}> <Canvas shadows>
            <Scene color={newcolor} />
            {/* <Environment preset="city" /> */}

          </Canvas></div>

        </div>
      </div>



      <div className='block md-hidden'>
        <div className='mt-0 flex flex-col w-full' >
          
          <div className="w-full" style={{ height:'100vh' }}> <Canvas shadows>
            <Scene color={newcolor} />
            {/* <Environment preset="city" /> */}

          </Canvas></div>

          <div className="w-full p-2">
            <div style={{'width':'30%'}}>
            <h1 className='text-black text-center my-2 '>Color Picker</h1>
            <SketchPicker width="100%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

              setnewcolor(color)
            }} onChange={((color, event) => {
              setnewcolor(color)
            })} />
            </div>
          </div>

        </div>
      </div>

    </>
  );
}