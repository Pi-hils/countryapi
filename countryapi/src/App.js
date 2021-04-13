import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    asias: [],
    eupopes: [],
    isLoaded: false
  }
}

  render() {
    return (
        <div>
        <h1>Countries</h1>
      </div>
    );
  }
}

export default App;

