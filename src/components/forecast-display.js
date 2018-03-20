import React, { Component } from 'react';
import Title from './title';
import { CloudyIcon, RainyIcon, SnowyIcon, SunnyIcon } from './icons'
import locationList from '../locations/data.json';
import Toggle from './day-view';

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
                        <div className="">
                            {dayforecast.map((item, i) => renderForecast(city, item, i))}
                        </div>
                    </div>
                </div>
            )
        };

        let renderForecast = (city, item, index) => {
            return (
                <a key={index} className="column is-one-fifth daily-display">
                    <Title size={4}>{ item.day }</ Title> 
                    { renderIcon(item.forecast) }
                    <p>High: { item.high} </p>
                    <p>Low: {item.low}</p>
                </a>
            )
        };

        let renderIcon = (forecast) => {
            switch(forecast) {
                case 'sunny':
                    return <SunnyIcon />;
                case 'snowy':
                    return <SnowyIcon />;
                case 'cloudy':
                    return <CloudyIcon />;
                case 'rainy':
                    return <RainyIcon />;
            }
        }

        return (
            <section>
                <Title size={2}>Your Saved Locations</Title>
                <div className="" style={{padding: "30px"}}>
                    {renderCity('Bristol', locationList.bristol)}
                    {renderCity('London', locationList.london)}
                    {renderCity('Bath', locationList.bath)}
                </div>
                <Title size={3}>Add a new location</Title>
                <Toggle />
                {/* Add an input here to add a new location which then renders location-select component */}
            </section>
        )
    }

}