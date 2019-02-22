import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div className="Home">

        <p>Hi from home</p>

        <Link to = '/'>Home</Link>
        <Link to = '/Form'>FORM</Link>
        <Link to = '/Page2'>Page 2</Link>

      </div>
    );
  }
}

export default Home;
