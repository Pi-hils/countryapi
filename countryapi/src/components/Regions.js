import React from 'react';


class Regions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    // value: 'region',
    asias: [],
    europes: [],
    isLoaded: false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  
    if(this.state.value == 'asia'){
       alert('These are the countries in: ' + 'asia');
      console.log('hi')
    }
    else{
      alert('These are the countries in: ' + this.state.value)
    }
    event.preventDefault();
  }

  render() {
    var { isLoaded, asias, europes } = this.state;

    if (!isLoaded) {
      return(<div className='form'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Please select Region:
          <select value={this.state.value} onChange={this.handleChange}>
          
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
           
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      )
    }
  
  }
}

export default Regions