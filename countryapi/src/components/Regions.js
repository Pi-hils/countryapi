import React from 'react';

// function Regions(){
//   return(
//   <select>
//   <option value="asia">Asia</option>
//   <option value="europe">Europe</option>
//  </select>
//   )
// }

class Regions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    value: 'region',
    asias: [],
    europes: [],
    isLoaded: false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){

    fetch("https://restcountries.eu/rest/v2/region/asia")
      .then(res => res.json())
      .then(json => {
        this.setState({
          
          asias: json,
          currencies: json
        })
      })

      fetch("https://restcountries.eu/rest/v2/region/europe")
      .then(res => res.json())
      .then(json => {
        this.setState({
       
          europes: json,
        })
      }) 

  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('These are the countries in: ' + this.state.value);
    if(this.state.value == 'asia'){

    }
    event.preventDefault();
  }

  render() {
    var { asias, europes } = this.state;

      return(<form onSubmit={this.handleSubmit}>
        <label>
          Please select Region:
          <select value={this.state.value} onChange={this.handleChange}>
          <option selected value="region">Region</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
           
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      )
    // }
  
    return (
      <div className="App">
      <h2>Countries</h2>
        <ul className='asias'>
        {asias.map(asia =>(
            <li key={asia.id}>
              Name:{asia.name} <strong>||</strong> Capital:{asia.capital}<strong>||</strong> Population:{asia.population}<strong>||</strong> Flag: {asia.flag} <strong>||</strong> 

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

export default Regions