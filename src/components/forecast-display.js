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
                        <cloudyIcon><svg style={{ width: '24px', height: '24px' }}>
                            <path xmlns="http://www.w3.org/2000/svg" style="fill:#030104;" d="M28.004,14.506c0,0.552,0.443,1,1.01,1h1.98c0.558,0,1.01-0.444,1.01-1c0-0.553-0.443-1-1.01-1    h-1.98C28.456,13.506,28.004,13.949,28.004,14.506z" />
                            <path xmlns="http://www.w3.org/2000/svg" style="fill:#030104;" d="M27.586,16.714c-0.172-0.456-0.393-0.887-0.656-1.287c0.047-0.302,0.07-0.611,0.07-0.925    c0-3.313-2.688-6-6-6c-1.533,0-2.932,0.575-3.992,1.521C15.576,9.063,13.854,8.502,12,8.502c-4.904,0-8.894,3.924-8.998,8.803    C1.208,18.344,0,20.285,0,22.502c0,3.312,2.687,6,6,6h20c3.312,0,6-2.693,6-6C32,19.736,30.13,17.409,27.586,16.714z M21,10.502    c1.839,0,3.389,1.241,3.855,2.933c-0.979-0.592-2.126-0.933-3.355-0.933c-0.641,0-1.26,0.093-1.844,0.266    c-0.319-0.515-0.688-0.994-1.1-1.432C19.23,10.813,20.079,10.502,21,10.502z M26.003,26.502H5.997c-2.203,0-3.997-1.791-3.997-4    c0-1.893,1.317-3.482,3.087-3.896C5.029,18.247,5,17.878,5,17.502c0-3.866,3.134-7,7-7c3.162,0,5.834,2.097,6.702,4.975    c0.769-0.611,1.739-0.975,2.798-0.975c2.316,0,4.225,1.75,4.473,4h0.03c2.203,0,3.997,1.791,3.997,4    C30,24.707,28.211,26.502,26.003,26.502z" />
                        </svg>
                        < /cloudyIcon>
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
            </section>
        )
    }

}