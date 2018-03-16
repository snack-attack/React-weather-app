import React, { Component } from 'react';
import Title from './title';
import locationList from '../locations/list.json';


export default class LocationSelect extends Component {
    constructor(props) {
        super(props);
    }

    render () {


        return (
            <section className="section" >
                <Title size={3}>My Saved Locations</Title>
                <div className="columns">
                    
                </div>
            </section>
        );
    }
}