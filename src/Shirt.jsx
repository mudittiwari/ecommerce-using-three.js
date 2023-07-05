import React, { useState, useRef, Suspense, useEffect } from 'react';
import { } from 'react-router-dom';
import { Canvas, } from '@react-three/fiber';
import {
  OrbitControls, MeshReflectorMaterial,
  PresentationControls,
  Stage
} from '@react-three/drei';
import { SketchPicker,TwitterPicker } from 'react-color';
import { Shirtcomp } from './3Dcomps/Shirtcomp';
import { AmbientLight } from 'three';
import Drawer from 'react-modern-drawer'
import { IoIosColorPalette, IoIosImage } from 'react-icons/io'
import { TiTickOutline } from 'react-icons/ti'
import { BsPersonBoundingBox } from 'react-icons/bs';

import 'react-modern-drawer/dist/index.css'
import Texture from './textures/texture.png';
import Texture1 from './textures/texture1.jpg';
import Texture2 from './textures/texture2.jpg';
import Texture3 from './textures/texture3.jpg';
import Texture4 from './textures/texture4.jpg';
import Texture5 from './textures/texture5.png';
import Logo from './logos/logo.jfif';
import Logo1 from './logos/logo1.jfif';
import Logo2 from './logos/logo2.jfif';
import Logo3 from './logos/logo3.jfif';
import Logo4 from './logos/logo4.jfif';
import Logo5 from './logos/logo5.jfif';
function Scene(props) {

  return (
    <>
      <Stage environment={null} intensity={1} castShadow={false} >
        <Shirtcomp color={props.color.hex} texture={props.texture} logo={props.logo} />
      </Stage>
      <OrbitControls enableZoom={true} minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default function Shirt(props) {
  const [newcolor, setnewcolor] = useState({ 'hex': '#ffffff' })
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen3, setIsOpen3] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)
  const [texture, settexture] = useState(-1)
  const [logo, setlogo] = useState(-1)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
    setIsOpen2(false)
    setIsOpen3(false)
  }
  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState)
    setIsOpen(false)
    setIsOpen3(false)
  }
  const toggleDrawer3 = () => {
    setIsOpen3((prevState) => !prevState)
    setIsOpen(false)
    setIsOpen2(false)
  }

  function drawermobile() {
    return (
      <Drawer

        open={isOpen}
        onClose={toggleDrawer}
        enableOverlay={true}
        direction='bottom'
        size={150}
        className='bla bla bla'
      >
        <div className="w-full p-2">
          <div style={{ 'width': '100%' }}>
            <h1 className='text-darktheme-500 text-center my-2 '>Color Picker</h1>
            <TwitterPicker triangle='top-left' width="100%" disableAlpha={true} color={newcolor} onChangeComplete={(color) => {

              setnewcolor(color)
            }} onChange={((color, event) => {
              setnewcolor(color)
            })} />
          </div>
        </div>

      </Drawer>
    );
  }
  function drawermobile2() {
    return (<Drawer
      open={isOpen2}
      size={200}
      onClose={toggleDrawer2}
      enableOverlay={true}
      direction='bottom'
    >
      <div className="w-full px-5  h-full overflow-y-scroll flex flex-col items-center justify-start">
        
        <div style={{ 'width': '100%', 'height': 'max-content' }}>
          <h1 className='text-darktheme-500 text-center my-2 text-2xl font-bold mt-5'>Texture Picker</h1>
          <div onClick={() => {
          settexture(-1);
        }} class="w-40 mb-5 mx-auto rounded-md px-3.5 mt-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-darktheme-500 text-darktheme-500 hover:text-white">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darktheme-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-darktheme-500 transition duration-300 group-hover:text-white ease">Remove Texture</span>
        </div>
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
  function drawermobile3() {
    return (<Drawer
      open={isOpen3}
      size={350}
      onClose={toggleDrawer3}
      enableOverlay={true}
      direction='bottom'
    >
     <div className="w-full px-5 overflow-y-scroll  h-full flex flex-col items-center justify-start">
        <div style={{ 'width': '100%', 'height': 'max-content' }}>
          <h1 className='text-darktheme-500 text-center my-2 text-2xl font-bold mt-5'>Logo Picker</h1>
          <div onClick={() => {
          setlogo(-1);
        }} class="w-36 mb-5 mx-auto rounded-md px-3.5 mt-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-darktheme-500 text-darktheme-500 hover:text-white">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darktheme-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-darktheme-500 transition duration-300 group-hover:text-white ease">Remove Logo</span>
        </div>
          <div className='w-full flex justify-around flex-wrap'>
            <img src={Logo} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(0)
            }} />
            <img src={Logo1} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(1)
            }} />
            <img src={Logo2} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(2)
            }} />
            <img src={Logo3} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(3)
            }} />
            <img src={Logo4} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(4)
            }} />
            <img src={Logo5} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(5)
            }} />
          </div>
        </div>
        
      </div>

    </Drawer>);
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
        <div className="w-full px-5 h-full flex flex-col items-center justify-start">
          <div style={{ 'width': '100%' }}>
            <h1 className='text-darktheme-500 text-center mt-5 my-2 text-2xl font-bold'>Color Picker</h1>
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
      <div className="w-full px-5  h-full overflow-y-scroll flex flex-col items-center justify-start">
        
        <div style={{ 'width': '100%', 'height': 'max-content' }}>
          <h1 className='text-darktheme-500 text-center my-2 text-2xl font-bold mt-5'>Texture Picker</h1>
          <div onClick={() => {
          settexture(-1);
        }} class="w-40 mb-5 mx-auto rounded-md px-3.5 mt-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-darktheme-500 text-darktheme-500 hover:text-white">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darktheme-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-darktheme-500 transition duration-300 group-hover:text-white ease">Remove Texture</span>
        </div>
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
  function drawerpc3() {
    return (<Drawer
      open={isOpen3}
      size={350}
      onClose={toggleDrawer3}
      enableOverlay={false}
      direction='right'
    >
     <div className="w-full px-5 overflow-y-scroll  h-full flex flex-col items-center justify-start">
        <div style={{ 'width': '100%', 'height': 'max-content' }}>
          <h1 className='text-darktheme-500 text-center my-2 text-2xl font-bold mt-5'>Logo Picker</h1>
          <div onClick={() => {
          setlogo(-1);
        }} class="w-36 mb-5 mx-auto rounded-md px-3.5 mt-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-darktheme-500 text-darktheme-500 hover:text-white">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darktheme-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-darktheme-500 transition duration-300 group-hover:text-white ease">Remove Logo</span>
        </div>
          <div className='w-full flex justify-around flex-wrap'>
            <img src={Logo} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(0)
            }} />
            <img src={Logo1} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(1)
            }} />
            <img src={Logo2} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(2)
            }} />
            <img src={Logo3} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(3)
            }} />
            <img src={Logo4} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(4)
            }} />
            <img src={Logo5} className='w-5/12 cursor-pointer my-2' onClick={() => {
              setlogo(5)
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
        {drawerpc2()}
        {drawerpc3()}
      </div>
      <div className='block md:hidden'>
        {drawermobile()}
        {drawermobile2()}
        {drawermobile3()}
      </div>
      <div className='flex md:hidden'>
        <div className='drawer-mobile '>
          <div className='mobile-container '>
            <button className=' text-white text-2xl mr-8 ' onClick={toggleDrawer}><IoIosColorPalette /></button>
            <button className=' text-white text-2xl mr-8' onClick={toggleDrawer2}><IoIosImage /></button>
            <button className=' text-white text-2xl  ' onClick={toggleDrawer3}><BsPersonBoundingBox /></button>
            <button className=' text-white text-2xl ml-8 ' onClick={toggleDrawer}><TiTickOutline /></button>
          </div>
        </div>
      </div>
      <div className='md:flex hidden'>
        <div className='drawer-pc'>
          <div className='pc-container'>
            <button className=' text-white text-3xl mb-8 ' onClick={toggleDrawer}><IoIosColorPalette /></button>
            <button className=' text-white text-3xl ' onClick={toggleDrawer2}><IoIosImage /></button>
            <button className=' text-white text-2xl mt-8 ' onClick={toggleDrawer3}><BsPersonBoundingBox /></button>
            <button className=' text-white text-3xl mt-8 ' onClick={toggleDrawer}><TiTickOutline /></button>

          </div>
        </div>
      </div>





      <div className='block md:hidden'>
        <div className='mt-0 flex flex-col w-full' >

          <div className="w-full" style={{ height: '70vh' }}> <Canvas shadows>
            <Scene color={newcolor} texture={texture} logo={logo} />
            {/* <Environment preset="city" /> */}

          </Canvas></div>


        </div>

      </div>

      <div className='hidden md:block'>
        <div className='mt-5 flex flex-col w-full' >

          <div className="w-full" style={{ height: '70vh' }}> <Canvas shadows>
            <Scene color={newcolor} texture={texture}  logo={logo} />
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