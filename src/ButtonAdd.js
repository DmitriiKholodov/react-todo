import React from 'react';
import { Component } from 'react';

export default class ButtonAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.addTask}>add task</button>
        );
    }
}
