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
    var { isLoaded, asias, europes } = this.state;

    if(!isLoaded){
      return <h3>Will Load shortly...</h3>
    }
    else {
      return (
          <div>
          <h1>Countries</h1>
        {/* <ul>
        {asias.map(asia)}
        </ul> */}

      </div>
    );
   }
  }
}

export default App;

