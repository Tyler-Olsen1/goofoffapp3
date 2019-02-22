import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Page2 extends Component {
  render() {
    return (
      <div className="Page2">
        <p>Hi from Page2</p>
        <Link to = '/'>Home</Link>
        <Link to = '/Form'>FORM</Link>
      </div>
    );
  }
}

export default Page2;
