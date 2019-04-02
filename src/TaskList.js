import React from 'react';
import { Component } from 'react';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    toggleTask = (e) => {
        let id = e.target.id;
        this.props.toggle(id);
    }

    removeTask = (e) => {
        let id = e.target.parentNode.id;
        this.props.remove(id);
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map((item, index) => {
                    return <li
                        onClick={this.toggleTask}
                        id={item.id}
                        key={item.id}
                        style={{textDecoration: item.done && "line-through"}}>
                        {item.text}
                        <button onClick={this.removeTask}>remove</button>
                    </li>
                })}
            </ul>
        );
    }
}


