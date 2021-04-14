import React, { Component } from 'react';
import DropdownSelector from './components/DropdownSelector'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    countries: [],
    isLoaded: false
  }

  this.onSubmit = this.onSubmit.bind(this)
}


  onSubmit(region) {
    this.setState({
      isLoaded: false,
    })

    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(res => res.json()) 
    .then(json => {
      this.setState({
        isLoaded: true,
        countries: json,
      })
    }) 
  }

  render() {

    const { countries } = this.state;

    //  if(handleSubmit==){
    //   return <h3>Will Load shortly...</h3>
    // }
    // else {
      return (
          <div>
          <DropdownSelector onChoiceSelected={this.onSubmit}/>
          <h1>Countries</h1>
        
            <ul>
        {countries.map(country=>(
          <li key={country.id}>
          Name: {country.name}<strong>||</strong>Capital: {country.capital} <strong>||</strong> Population: {country.population}<strong>||</strong>  Flag: {country.flag}
          </li>
        ))}
        </ul> 

      </div>
    );
  }
  }


export default App;

