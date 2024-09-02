"use client";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Upload } from "./pages/Upload/Upload";
import { Header } from "./components/layout/Header";
import "./Page.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </div>
  );
}
