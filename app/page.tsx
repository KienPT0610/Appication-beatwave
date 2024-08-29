"use client";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Upload } from "./components/pages/Upload";
import "./Page.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
      </Routes>
    </div>
  );
}
