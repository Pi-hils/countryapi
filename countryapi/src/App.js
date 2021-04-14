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

      return (
        <div className='dropdown'>
          <DropdownSelector onChoiceSelected={this.onSubmit}/>
          <h1>Countries</h1>
           <ul className='countries'>
             {countries.map(country=>(
              <li key={country.id}>
              <strong>Name:</strong> {country.name} <strong>|| Capital:</strong> {country.capital} <strong>|| Population:</strong>  {country.population} <strong>|| Flag:</strong> {country.flag}
              <strong>||</strong> 
              {country.currencies.map(cur=>(
                <li value={cur.id}>
                  Currency: {cur.name}
                </li>
              ))}
              </li>
            ))}
           </ul> 
        </div>
    );
  }
  }


export default App;

