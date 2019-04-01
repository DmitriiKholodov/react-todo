import React, { Component } from 'react';
import Input from './Input';
import TaskList from './TaskList';
import ButtonRemove from './ButtonRemove';
import ButtonAdd from './ButtonAdd';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks: ['buy bread', 'cutting beard', 'look at bird']
      }
  }

  addTask = (e) => {
      console.log(e, 'addTask');
  };
  removeTask = (e) => {
      console.log(e, 'removeTask');
  };

  render() {
    return (
      <div className="App">
        <Input />
        <ButtonAdd className="add-task">add task</ButtonAdd>
        <ButtonRemove className="remove-task">remove task</ButtonRemove>
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
