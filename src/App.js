import React, { Component } from 'react';
import Input from './Input';
import TaskList from './TaskList';
import Button from './Button';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks: ['buy bread', 'cutting beard', 'look at bird']
      }
  }
  render() {
    return (
      <div className="App">
        <Input />
        <Button />
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
