import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Whotlf from './components/who/whotlf';
import Whichtlf from './components/which/whichtlf';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
         <div className="App">
            <Header/>
            <Routes>
              <Route path="/" exac element={<Home/>}></Route>
              <Route path="/WhatTLF"  element={<Home/>}/>
              <Route path="/WhoTLF" element={<Whotlf/>}/>
              <Route path="/WhichTLF"  element={<Whichtlf/>}/>
            </Routes>
            <Footer/>
         </div>
    </Router>
  );
}

export default App;
