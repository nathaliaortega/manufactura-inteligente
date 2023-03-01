
import './App.css';
import React, { useState } from "react";
import Home from '../src/Home/Home';
import Compression from '../src/Compression/Compression';
import CompressionData from '../src/CompressionData/CompressionData';
import Flexion from '../src/Flexion/Flexion';
import FlexionData from '../src/FlexionData/FlexionData';
import Asentamiento from '../src/Asentamiento/Asentamiento';
import AsentamientoData from '../src/AsentamientoData/AsentamientoData';
import Layout from '../src/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" exactly element={<Home />} />
        <Route path="/compression" element={<Compression />} />
        <Route path="/compression-data" element={<CompressionData />} />
        <Route path="/flexion" element={<Flexion />} />
        <Route path="/flexion-data" element={<FlexionData />} />
        <Route path="/asentamiento" element={<Asentamiento />} />
        <Route path="/asentamiento-data" element={<AsentamientoData />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
