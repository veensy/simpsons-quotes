import React, { Component } from 'react';
import logo from "./logo.svg";


class Working extends Component {
    constructor(props) {
        super(props);
        this.state = {
          on: props.on
        };
      }
      handleClick = () => {
        this.setState({ on: !this.state.on });
      };
  render() {
    const spin = this.state.on ? 'App-logo-on' : 'App-logo';
    return (
       
        <header className="App-header">
          
          <h1 className="App-title">Simpsons Quotes</h1>
          
      <img src={logo} className={spin} alt="logo"/>
      <button onClick={this.handleClick} className=''>{spin.toUpperCase()}


      
      </button>
      </header>
      
     
    );
  }
}



export default Working;
