import React, { Component } from 'react';
import Forecast from './forecast-display';
import LocationSelect from './location-select';
import Title from './title';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <div className="header">
          <div className="header-display">
            <Title className="navbar-item" size={2}>Weekly Weather Forecast</Title>
          </div>
        </div>
        <div className="container is-widescreen">
          {<Forecast />}
        </div>
      </div>
    );
  }
}
