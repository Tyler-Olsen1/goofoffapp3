import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Form extends Component {
  state ={
    name: " ",
    dogname: " ",
    favoriteFood:" "
  }

handleSubmit = e => {
  e.preventDefault()
  const data = JSON.stringify({ ...this.state })
  fetch("http://localhost:4000", {
    method: "POST", 
    body: data, 
    headers: {
      "Content-Type": "application/json"
    }
  })
}

render() {
  return (
    <div className="Form">

      <h1>FORM</h1>
      <h4>Fill out this form, now!</h4>

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Name</label>
          <input type="text" 
          className="form-control" 
          placeholder="Your name" 
          onChange={((e) => this.setState({ name: e.target.value }))}/>
        </div>

        <div className="form-group">
          <label htmlFor="dogsName">Dog's Name</label>
          <input type="text" 
          className="form-control" 
          placeholder="Your dog's name"
          onChange={((e) => this.setState({ dogname: e.target.value }))}/>
        </div>

        <div className="form-group">
          <label htmlFor="favoriteFood">Favorite Food</label>
          <input type="text"
          className="form-control"
          placeholder="Your favorite food"
          onChange={((e) => this.setState({ favoriteFood: e.target.value }))}/>
        </div>

      </form>
      <Link to = 'Home'>Home</Link>
      <Link to = '/page2'>Page 2</Link>
    </div>
    
  );
}
}

export default Form;
