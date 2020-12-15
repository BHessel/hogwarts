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
    console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter />
        <CardContainer hogs={hogs}/>
      </div>
    );
  }
}

export default App;
