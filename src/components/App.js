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
          <div className="">
            <Title className="navbar-item" size={1}>Weekly Weather Forecast</Title>
          </div>
        </div>
        <div className="container is-widescreen">
          {/* Turn this into a ternary that conditionally renders Forecast or LocationSelect component based on click event */}
          {<Forecast />}
        </div>
      </div>
    );
  }
}
