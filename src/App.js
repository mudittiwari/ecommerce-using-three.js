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

// work to do next in this project
// 1.add color picker in the side bar

