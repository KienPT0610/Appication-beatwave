"use client";

import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
  const [initialState, setInitialState] = useState<null | State>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const state = cookieToInitialState(
        getConfig(),
        // headers().get('cookie'), // Uncomment and adjust if needed
      );
      setInitialState(state);
    }
  }, []);

  if (initialState === null) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <div className="App">
      <Providers initialState={initialState}>
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Providers>
    </div>
  );
}
