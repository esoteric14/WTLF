import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Whotlf from "./components/who/whotlf";
import Whichtlf from "./components/which/whichtlf";
import { Routes, Route } from "react-router-dom";
import Index from "./components/index";
import WTLF from "./components/WTLF";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exac element={<Index />}></Route>
          <Route path="WhatTLF" element={<Index />} />
          <Route path="WhoTLF" element={<Whotlf />} />
          <Route path="WhichTLF" element={<Whichtlf />} />
          <Route path="/WTLF" element={<WTLF />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
