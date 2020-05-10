import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App! </h1>
        <p> This is Really Working!!</p>
        <Person name = 'Max' age = "28"/>
        <Person name = 'Manu' age = "29"> My Hobbies:Racing </Person>
     </div>
    );
  }
}

export default App;
