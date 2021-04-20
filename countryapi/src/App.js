import React, { Component } from 'react';
import DropdownSelector from './components/DropdownSelector'
import './App.css';
import CountryTable from './components/CountryTable';

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
          
   
           <ul className='countries'>
           <h1>Countries</h1>
           <CountryTable />
             {countries.map(country=>(
              <li key={country.id}>
                {country.name}<strong>&emsp; &emsp; &emsp; || &emsp; &emsp; </strong> {country.capital} <strong>&emsp; &emsp; &emsp;||&emsp; &emsp; </strong>  {country.population} <strong>&emsp; &emsp; &emsp;|| &emsp; &emsp; </strong> {country.flag}
                <strong>&emsp; &emsp; &emsp;||</strong> 
                {country.currencies.map(cur=>(
              <li value={cur.id}>
              <strong></strong> {cur.name}
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

