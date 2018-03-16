import React, { Component } from 'react';
import Title from './title';
import cloudyIcon from '../assets/cloudy'
// import locationList from '../locations/list.json';

export default class Forecast extends React.Component {

    render () {
        const list = [
            { "city": "Bristol", "day": "Monday", "forecast": "sunny" },
            { "city": "London", "day": "Tuesday", "forecast": "cloudy"}
        ] 

        const contentKeys = Object.keys(list);

        let renderCity = (city, img, forecast) => {
            return (
                <div>
                    <div>
                        <Title size={3}>{ city }</Title>
                    </div>
                    <div>
                        {/* //need to get the svg icon to display */}
                        <cloudyIcon />
                    </div>
                    <div>
                        {/* need to map the list array to display the forecast for each city */}
                    </div>
                </div>
            )
        };

        return (
            <section>
                {renderCity('Bristol')}
                {renderCity('London')}
                <cloudyIcon />
            </section>
        )
    }

}