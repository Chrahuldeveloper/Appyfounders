import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
// import Lenis from "lenis";
import Layout from "./LenisProvider/Layout";
export default function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:sub" element={<Contact />} />
      </Routes>
    </Layout>
    </>
  );
}
