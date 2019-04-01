import React from 'react';
import { Component } from 'react';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks
        }
    }

    render() {
        return (
            <ul>
                {this.state.tasks.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        );
    }
}


