import "./App.css";
import React, { useState, useRef, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Croptop from "./Croptop";
import Shirt from "./Shirt";



export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/croptop' element={<Croptop />} />
          <Route exact path='/shirt' element={<Shirt />} />


        </Routes>
      </HashRouter>
    </>
  );

}

// 1. download 10 textures and convert them to black and white so that we can apply them easily
// 2. add textures in the bottom of color picker and add a button to select them
// 3. give a feature to disable logo and texture
// 4. add headings on top of the page
// 5. add navbar and footer
// 6. add homepage
// 7. create homepage design with links to each customizer