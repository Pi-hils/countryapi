import React from 'react';


class DropdownSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoaded: false,
    value: '',
    choices: ['','asia', 'europe']
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { value } = this.state
    const { onChoiceSelected } = this.props
    
    event.preventDefault();
    onChoiceSelected(value)
  }

  render() {
    var { isLoaded } = this.state;

    if (!isLoaded) {
      return(<div className='form'>
      <form onSubmit={this.handleSubmit}>
        <label>
          <strong>Please select Region:</strong>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="region"></option>
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

export default DropdownSelector