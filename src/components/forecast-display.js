import React, { Component } from 'react';
import Title from './title';
import { CloudyIcon, RainyIcon, SnowyIcon, SunnyIcon } from './icons'
import locationList from '../locations/data.json';

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
    }

    // Add a function to click on a day's forecast to be shown its hourly forecast

    render () {
        let renderCity = (city, dayforecast) => {
            return (
                <div>
                    <div>
                        <Title size={3} className="saved-city">{ city }</Title>
                    </div>
                    <div className="">
                        {/* need to map the list array to Display the day/img/forecast */}
                        <div className="">
                            {dayforecast.map((item, i) => renderForecast(city, item, i))}
                        </div>
                    </div>
                </div>
            )
        };

        let renderForecast = (city, item, index) => {
            return (
                <a key={index} className="column is-one-fifth">
                    {/* figure out how to access day key in json data */}
                    <Title size={4}>{ item.day }</ Title> 
                    <CloudyIcon />
                    {/* high & low temps will display here */}
                </a>
            )
        };

        return (
            <section>
                <Title size={2}>Your Saved Locations</Title>
                <div className="" style={{padding: "30px"}}>
                    {renderCity('Bristol', locationList.bristol)}
                    {renderCity('London', locationList.london)}
                    {renderCity('Bath', locationList.bath)}
                </div>
                {/* Put a input here to add a new location which then renders location-select component */}
            </section>
        )
    }

}