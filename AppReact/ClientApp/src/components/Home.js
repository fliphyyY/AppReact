import React, { Component } from 'react';
import JsonData from './data.json'

export class Home extends Component {
  static displayName = Home.name;


  constructor(props) {
    super(props);
  }



  componentDidMount() {
    this.render()
  }

  static renderForecastsTable(forecasts) {
   console.log(forecasts[0].tags.information);
    return (
      <React.Fragment>

      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Information</th>
            <th>Internet access</th>
            <th>FixMe</th>
            <th>Name</th>
            <th>Opening hours</th>
            <th>Source</th>
            <th>Tourism</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {forecasts?.tags.map(forecast =>
            <tr>
              <td>{forecast?.information}</td>
              <td>{forecast?.internet_access}</td>
              <td>{forecast?.fixme}</td>
              <td>{forecast?.name}</td>
              <td>{forecast?.opening_hours}</td>
              <td>{forecast?.source}</td>
              <td>{forecast?.tourism}</td>
              <td>{forecast?.website}</td>
            </tr>
          )}
        </tbody>
      </table>
   <div>

 </div>
 </React.Fragment>

    );
  }
//button does not work
  render() {
    Home.renderForecastsTable(JsonData);

    return (
      <div>
        <h1 id="tabelLabel" >Server statistics</h1>
        <p>Demonstration fetching data from the server.</p>
      </div>
    );
  }
}
