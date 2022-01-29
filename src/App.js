// eslint-disable-next-line no-unused-vars
import react, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";

import CenterForCivil from "./components/map/CenterForCivil";
import CocoCola from "./components/map/CocoCola.js";
import MLKHouse from "./components/map/MLKHouse";
import StateCapitol from "./components/map/StateCapitol";
import StoneMountain from "./components/map/StoneMountain";
import SwanHouse from "./components/map/SwanHouse";

import MLK from "./components/people/MLK";
import Stacey from "./components/people/Stacey";
import Peach from "./components/people/Peach";

// import logo from './lo go.svg';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <header className="app-header">
              <Nav />
            </header>

            <Route path="/center-for-civil-rights" render={() => <CenterForCivil />} />
            <Route path="/cococola" render={() => <CocoCola />} />
            <Route path="/mlk-house" render={() => <MLKHouse />} />
            <Route path="/state-capitol" render={() => <StateCapitol />} />
            <Route path="/stone-mountain" render={() => <StoneMountain />} />
            <Route path="/swan-house" render={() => <SwanHouse />} />
            <Route path="/mlk" render={() => <MLK />} />
            <Route path="/stacey-abrams" render={() => <Stacey />} />
            <Route path="/peach" render={() => <Peach />} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/about" render={() => <About />} />

          </div>
          <Footer />
        </Router>
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} style={{}} className="App-logo" alt="logo" />
      //     <p>
      //       Benis
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}
