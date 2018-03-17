import React, { Component } from 'react';
import Title from './title';
import { CloudyIcon, RainyIcon, SnowyIcon, SunnyIcon } from './icons'
import locationList from '../locations/list.json';

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let renderCity = (city, forecast) => {
            return (
                <div>
                    <div>
                        <Title size={3}>{ city }</Title>
                    </div>
                    <div className="dayForecast">
                        {/* need to map the list array to Display the day/img/forecast */}
                        {/* //need to get the svg icon to display based on forecast key in json data */}
                        <SunnyIcon />
                        {/* high & low temps here */}
                    </div>
                </div>
            )
        };

        // Add a function to click on a day's forecast to be shown its hourly forecast

        return (
            <section>
                <Title size={2}>Your Saved Locations</Title>
                <div className="columns">
                    {renderCity('Bristol', locationList.bristol)}
                    {renderCity('London', locationList.london)}
                    {renderCity('Bath', locationList.bath)}
                </div>
                {/* Put a input here to add a new location which then renders location-select component */}
            </section>
        )
    }

}