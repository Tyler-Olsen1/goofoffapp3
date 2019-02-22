import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routing from "./Routing.js"

class App extends Component {
  render() {
    return (
      <div className="App">

      <Link to="/">Home</Link>
      <Link to="./component/Forms.js">Forms</Link>
      <Link to="./component/Page2">Page2</Link>
      <Routing />
      </div>
    );
  }
}

export default App;
