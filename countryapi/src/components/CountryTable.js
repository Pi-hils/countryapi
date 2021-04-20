import React from 'react'

class CountryTable extends React.Component {
  render() {

    return (
      <table >
        <thead>
          <tr>
            <th >&emsp; Country Name &emsp; &emsp; || &emsp; </th>
            <th>Country Capital &emsp; &emsp; || &emsp; &emsp;</th>
            <th>Country Population &emsp; &emsp;||  &emsp; &emsp;</th>
            <th>Country Flag &emsp; &emsp; || &emsp; &emsp;</th>
            <th>Country Currencies &emsp; &emsp;&emsp; &emsp;</th>
          </tr>
        </thead>
        {/* <tbody></tbody> */}
      </table>
    );
  }
}

export default CountryTable;