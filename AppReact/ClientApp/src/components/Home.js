import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;


  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <React.Fragment>

      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Disk usage</th>
            <th>CPU usage</th>
            <th>Memory usage</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.diskUsage}>
              <td>{forecast.diskUsage}%</td>
              <td>{forecast.cpuUsage}%</td>
              <td>{forecast.memoryUsage}MB</td>
            </tr>
          )}
        </tbody>
      </table>
   <div>



   <button className="btn btn-primary" onClick={async() => await populateWeatherData()}>Fetch data</button> 
 </div>
 </React.Fragment>

    );
  }
//button does not work
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Home.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Server statistics</h1>
        <p>Demonstration fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    console.log("ZZZZZ")
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
