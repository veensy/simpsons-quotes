import React, { Component } from "react";
import "./App.css";
import Lamp from "./Lamp";
import Working from "./Working";



import Quotes from "./Quotes";



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Working />
      
        <Lamp on />
        <Lamp />
        
        <Quotes/>
      

      </div>
    );
  }
}

export default App;