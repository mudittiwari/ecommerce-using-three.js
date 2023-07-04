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
import Drawer from 'react-modern-drawer'
import { IoIosColorPalette, IoIosImage } from 'react-icons/io'
import { TiTickOutline } from 'react-icons/ti'

import 'react-modern-drawer/dist/index.css'
import Texture from './textures/texture.png';
import Texture1 from './textures/texture1.jpg';
import Texture2 from './textures/texture2.jpg';
import Texture3 from './textures/texture3.jpg';
import Texture4 from './textures/texture4.jpg';
import Texture5 from './textures/texture5.png';
function Scene(props) {

  return (
    <>
      <Stage environment={null} intensity={1} castShadow={false} >
        <Shirtcomp color={props.color.hex} texture={props.texture} />
      </Stage>
      <OrbitControls enableZoom={true} minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default function Shirt(props) {
  const [newcolor, setnewcolor] = useState({ 'hex': '#ffffff' })
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)
  const [texture,settexture]=useState(0)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
    setIsOpen2(false)
  }
  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState)
    setIsOpen(false)
  }

  function drawermobile() {
    return (
      <Drawer

        open={isOpen}
        onClose={toggleDrawer}
        enableOverlay={false}
        direction='bottom'
        className='bla bla bla'
      >
        <div className="w-full p-2">
          <div style={{ 'width': '30%' }}>
            <h1 className='text-black text-center my-2 '>Color Picker</h1>
            <SketchPicker width="100%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

              setnewcolor(color)
            }} onChange={((color, event) => {
              setnewcolor(color)
            })} />
          </div>
        </div>

      </Drawer>
    );
  }
  function drawerpc() {
    return (
      <Drawer

        open={isOpen}
        onClose={toggleDrawer}
        enableOverlay={false}
        direction='right'
        className='bla bla bla'
      >
        <div className="w-full px-5 h-full flex flex-col items-center justify-center">
          <div style={{ 'width': '100%' }}>
            <h1 className='text-black text-center my-2 text-2xl font-bold'>Color Picker</h1>
            <SketchPicker width="100%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

              setnewcolor(color)
            }} onChange={((color, event) => {
              setnewcolor(color)
            })} />
          </div>
        </div>

      </Drawer>
    );
  }
  function drawerpc2() {
    return (<Drawer
      open={isOpen2}
      size={350}
      onClose={toggleDrawer2}
      enableOverlay={false}
      direction='right'
    >
      <div className="w-full px-5 h-full flex flex-col items-center justify-center">
        <div style={{ 'width': '100%','height':'100%' }}>
          <h1 className='text-black text-center my-2 text-2xl font-bold mt-5'>Texture Picker</h1>
          <div className='w-full flex justify-around flex-wrap'>
            <img src={Texture} className='w-5/12 cursor-pointer my-2' onClick={() => {
              settexture(0)
            }} />
            <img src={Texture1} className='w-5/12 cursor-pointer my-2' onClick={() => {
              settexture(1)
            }} />
            <img src={Texture2} className='w-5/12 cursor-pointer my-2' onClick={() => {
              settexture(2)
            }} />
            <img src={Texture3} className='w-5/12 cursor-pointer my-2' onClick={() => {
              settexture(3)
            }} />
            <img src={Texture4} className='w-5/12 cursor-pointer my-2' onClick={() => {
              settexture(4)
            }} />
            <img src={Texture4} className='w-5/12 cursor-pointer my-2' onClick={() => {
              settexture(5)
            }} />
          </div>
        </div>
      </div>

    </Drawer>);
  }

  return (
    <>
      <div className='hidden md:block'>
        {drawerpc()}

      </div>
      <div className='hidden md:block'>
        {drawerpc2()}

      </div>
      <div className='block md:hidden'>
        {drawermobile()}
      </div>
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
            <button className=' text-white text-5xl ' onClick={toggleDrawer2}><IoIosImage /></button>
            <button className=' text-white text-5xl mt-8 ' onClick={toggleDrawer}><TiTickOutline /></button>
          </div>
        </div>
      </div>





      <div className='block md:hidden'>
        <div className='mt-0 flex flex-col w-full' >

          <div className="w-full" style={{ height: '80vh' }}> <Canvas shadows>
            <Scene color={newcolor} texture={texture} />
            {/* <Environment preset="city" /> */}

          </Canvas></div>


        </div>

      </div>

      <div className='hidden md:block'>
        <div className='mt-0 flex flex-col w-full' >

          <div className="w-full" style={{ height: '80vh' }}> <Canvas shadows>
            <Scene color={newcolor} texture={texture} />
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