import React, { useState, useRef, Suspense, useEffect } from 'react';
import { } from 'react-router-dom';
import { Canvas, } from '@react-three/fiber';
import {
  OrbitControls, MeshReflectorMaterial,
  PresentationControls,
  Stage
} from '@react-three/drei';
import { SketchPicker } from 'react-color';
import { Croptopcomp } from './3Dcomps/Croptopcomp';
import Drawer from 'react-modern-drawer';
import { IoIosColorPalette, IoIosImage } from 'react-icons/io'
import { TiTickOutline } from 'react-icons/ti'

import 'react-modern-drawer/dist/index.css'

function Scene(props) {

  return (
    <>


      <Stage environment={null} intensity={1} castShadow={false} >
        <Croptopcomp color={props.color.hex} />
      </Stage>
      <OrbitControls enableZoom={true} minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default function Croptop(props) {
  const [newcolor, setnewcolor] = useState({ 'hex': '#ffffff' })
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  function drawer() {
    return (
      <Drawer

        open={isOpen}
        onClose={toggleDrawer}
        direction='bottom'
        className='bla bla bla'
      >
        <div>Hello World</div>
      </Drawer>
    );
  }

  return (
    <>
      {drawer()}
      <div className='flex md:hidden'>
        <div className='drawer-mobile '>
          <div className='mobile-container '>
            <button className=' text-white text-5xl mr-8 ' onClick={toggleDrawer}><IoIosColorPalette /></button>
            <button className=' text-white text-5xl ' onClick={toggleDrawer}><IoIosImage /></button>
            <button className=' text-white text-5xl ml-8 ' onClick={toggleDrawer}><TiTickOutline /></button>
          </div>
        </div>
      </div>
      <div className='md:flex hidden'>
        <div className='drawer-pc'>
          <div className='pc-container'>
            <button className=' text-white text-5xl mb-8 ' onClick={toggleDrawer}><IoIosColorPalette /></button>
            <button className=' text-white text-5xl ' onClick={toggleDrawer}><IoIosImage /></button>
            <button className=' text-white text-5xl mt-8 ' onClick={toggleDrawer}><TiTickOutline /></button>
          </div>
        </div>
      </div>





      <div className='block md:hidden'>
        <div className='mt-0 flex flex-col w-full' >

          <div className="w-full" style={{ height: '80vh' }}> <Canvas shadows>
            <Scene color={newcolor} />
            {/* <Environment preset="city" /> */}

          </Canvas></div>

          {/* <div className="w-full p-2">
            <div style={{ 'width': '30%' }}>
              <h1 className='text-black text-center my-2 '>Color Picker</h1>
              <SketchPicker width="100%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

                setnewcolor(color)
              }} onChange={((color, event) => {
                setnewcolor(color)
              })} />
            </div>
          </div> */}

        </div>
        
      </div>

      <div className='hidden md:block'>
        <div className='mt-0 flex flex-col w-full' >

          <div className="w-full" style={{ height: '80vh' }}> <Canvas shadows>
            <Scene color={newcolor} />
            {/* <Environment preset="city" /> */}

          </Canvas></div>

          {/* <div className="w-full p-2">
            <div style={{ 'width': '30%' }}>
              <h1 className='text-black text-center my-2 '>Color Picker</h1>
              <SketchPicker width="100%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

                setnewcolor(color)
              }} onChange={((color, event) => {
                setnewcolor(color)
              })} />
            </div>
          </div> */}

        </div>
        
      </div>

    </>
  );
}