import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const app = props =>{
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: 'Max', age:28},
        {name: 'Manu', age: 29},
        {name: 'Stefanie', age: 26}
      ],
      otherState: 'some other value'
    })

    const[otherState, setOtherState] = useState('some other value')

    console.log(personsState, otherState)

    const switchNameHandler = () => {
      // console.log("Was Clicked")
      // this changes state, don't use, use setState --this.state.persons[0].name = "Maximillian"
      setPersonsState({persons: [
          {name: 'Maximillian', age:28},
          {name: 'Manu', age: 29},
          {name: 'Stefanie', age: 27}
        ]})
    }

  return (
        <div className="App">
          <h1> Hi, I'm a React App! </h1>
          <p> This is Really Working!!</p>
          <button onClick={switchNameHandler}>  Switch Name </button>
          <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
          <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}> My Hobbies:Racing </Person>
          <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
       </div>
      );
}
// class App extends Component {
//
//   state = {
//     persons: [
//       {name: 'Max', age:28},
//       {name: 'Manu', age: 29},
//       {name: 'Stefanie', age: 26}
//     ],
//     otherstate: 'some other value'
//   }
//
//
//
  /*render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App! </h1>
        <p> This is Really Working!!</p>
        <button onClick={this.switchNameHandler}>  Switch Name </button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> My Hobbies:Racing </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
     </div>
    );
  }
}*/

export default app;

// switchNameHandler = () => {
//   // console.log("Was Clicked")
//   // this changes state, don't use, use setState --this.state.persons[0].name = "Maximillian"
//   this.setState({persons: [
//       {name: 'Maximillian', age:28},
//       {name: 'Manu', age: 29},
//       {name: 'Stefanie', age: 27}
//     ]})
// }
