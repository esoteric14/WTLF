import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Whotlf from './components/who/whotlf';
import Whichtlf from './components/which/whichtlf';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
         <div className="App">
            <Header/>
            <Switch>
              <Route path="/" exac component={Home}></Route>
              <Route path="/WhatTLF"  component={Home}/>
              <Route path="/WhoTLF" component={Whotlf}/>
              <Route path="/WhichTLF"  component={Whichtlf}/>
            </Switch>
            <Footer/>
         </div>
    </Router>
  );
}

export default App;
