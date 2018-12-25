import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import  Navbar  from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Landing from "./components/layout/Landing.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
        <Route path="/" Component={Landing} />>
        <Footer />
        </div>
        </Router>
      );
    }
  }
  
  export default App;
