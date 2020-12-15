import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Filter from './Filter';
import Card from './Card';
import CardContainer from './CardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter />
        <CardContainer />
      </div>
    );
  }
}

export default App;
