import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
  render(){
   return (
    <div style={{border: '1px solid', width: '800px', margin: '10px auto', padding: '5px auto'}}>
      <MyCars />
  </div>
   )
 }
}

export default App;
