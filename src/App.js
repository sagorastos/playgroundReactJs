import logo from './logo.svg';
import './App.css';
import React from 'react';
const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello  name='George'/>
    </div>
  )
}

export default App;
