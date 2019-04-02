import React from 'react';
import { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <input onChange={this.props.handleChange} type="text"/>
        );
    }
}


