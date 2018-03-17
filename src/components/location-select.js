import React, { Component } from 'react';
import Title from './title';
import locationList from '../locations/data.json';


export default class LocationSelect extends Component {
    constructor(props) {
        super(props);
    }

    //handleClick needs to be implemented below
    handleClick = () => {
        import('./forecast-display')
            .then(({ Forecast }) => {
                // Display forecast of selected city
            })
            .catch(err => {
                // Handle failure
            });
    };

    render () {


        return (
            <section className="section" >
                <Title size={3}>Add a new location</Title>
                <div className="columns">
                {/* Add an input and allow api data fetch */}
                </div>
            </section>
        );
    }
}