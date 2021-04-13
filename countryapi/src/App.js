import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    asias: [],
    europes: [],
    isLoaded: false
  }
}

  componentDidMount(){

    fetch("https://restcountries.eu/rest/v2/region/asia")
    .then(res => res.json()) 
    .then(json => {
      this.setState({
        isLoaded: true,
        asias: json,
      })
    })
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

