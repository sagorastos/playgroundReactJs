
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


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
      <Hello name="George"/>
      <Button >Show Toast</Button>
    </div>
  )
}

export default App;
