import "./App.css";
import React, { useState, useRef, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Croptop from "./Croptop";
import Shirt from "./Shirt";
import Navbar from "./Navbar";


export default function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/croptop' element={<Croptop />} />
          <Route exact path='/shirt' element={<Shirt />} />


        </Routes>
      </HashRouter>
    </>
  );

}

// 2. fix the position of drawers in the mobile view
// 5. add footer
// 6. add homepage(tomorrow)
// 7. create homepage design with links to each customizer(tomorrow)