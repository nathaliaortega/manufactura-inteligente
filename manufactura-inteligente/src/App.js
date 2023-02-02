
import './App.css';
import React, { useState } from "react";
import Home from '../src/Home/Home';
import Compression from '../src/Compression/Compression';
import Layout from '../src/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" exactly element={<Home />} />
        <Route path="/compression" element={<Compression />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
