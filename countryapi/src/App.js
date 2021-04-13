import React, { Component } from 'react';
import Regions from './components/Regions'
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

    fetch("https://restcountries.eu/rest/v2/region/europe")
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        europes: json,
      })
    })
  }

  render() {

    var { isLoaded, asias, europes } = this.state;

    //  if(handleSubmit==){
    //   return <h3>Will Load shortly...</h3>
    // }
    // else {
      return (
          <div>
          <Regions></Regions>
     
          <h1>Countries</h1>
          {/* if(){ */}
            <ul>
        {asias.map(asia =>(
          <li key={asia.id}>
          Name: {asia.name}<strong>||</strong>Capital: {asia.capital} <strong>||</strong> Population: {asia.population}<strong>||</strong>  Flag: {asia.flag}
          </li>
        ))}

        -----------------------------------
          

        <h1>Europe</h1>
            {europes.map(eu =>(
              <li key={eu.id}>
                Name:{eu.name} <strong>||</strong> Capital:{eu.capital}<strong>||</strong> Population:{eu.population}<strong>||</strong> Flag: {eu.flag}
              </li>
            ))}
        </ul> 

      </div>
    );
  }
  }


export default App;

