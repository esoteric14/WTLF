import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Whotlf from "./components/who/whotlf";
import Whichtlf from "./components/which/whichtlf";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/WhoTLF">
            <Whotlf />
          </Route>
          <Route path="/WhatTLF" element={<Home />} />
          <Route path="/WhichTLF" element={<Whichtlf />} />
          <Route path="/" exac element={<Home />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
