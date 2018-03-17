import React, { Component } from 'react';
import Title from './title';
import { CloudyIcon } from '../assets/cloudy'
// import locationList from '../locations/list.json';

export default class Forecast extends React.Component {

    render () {
        const list = [
            { "city": "Bristol", "day": "Monday", "forecast": "sunny" },
            { "city": "London", "day": "Tuesday", "forecast": "cloudy"}
        ] 

        let renderCity = (city, img, forecast) => {
            return (
                <div>
                    <section>
                        <div>
                            <Title size={3}>{ city }</Title>
                        </div>
                    </section>
                    <section>
                        <div>
                            {/* //need to get the svg icon to display */}
                            <CloudyIcon />
                        </div>
                        <div>
                            {/* need to map the list array to display the forecast for each city */}
                        </div>
                    </section>
                </div>
            )
        };

        return (
            <section>
                {renderCity('Bristol')}
                {renderCity('London')}
            </section>
        )
    }

}