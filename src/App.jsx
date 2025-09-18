import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<div>Work Page</div>} />
        <Route path="/artists" element={<div>Artists Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}
