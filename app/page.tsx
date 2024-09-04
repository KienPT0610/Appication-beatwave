"use client";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Upload } from "./pages/Upload/Upload";
import { Header } from "./components/layout/Header";
import { Manage } from "./pages/Manage/Manage";
import "./Page.css";
import { Providers } from "./components/providers/Provider";
import { getConfig } from './components/utils/wagmi'
import { cookieToInitialState } from 'wagmi'

export default function App() {
  const initialState = cookieToInitialState(
    getConfig(),
    // headers().get('cookie'),
  )
  return (
    <div className="App">
      <Providers initialState={initialState}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/manage" element={<Manage />} /> 
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Providers>
    </div>
  );
}
