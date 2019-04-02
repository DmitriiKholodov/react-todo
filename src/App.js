import React, { Component } from 'react';
import Input from './Input';
import TaskList from './TaskList';
import ButtonAdd from './ButtonAdd';
import {action, toggleTask, removeTask} from './actions/actions'
import {connect} from 'react-redux';


class App extends Component {
  constructor(props) {
      super(props);
  }

  addTask = (e) => {
      if(this.state.inputChange !== '') {
          this.props.addText(this.state.inputChange);
          this.setState({
              inputChange: ''
          });
          let inputVal = document.getElementsByTagName('input');
          inputVal[0].value = '';
      }
  };

  handleChange = (e) => {
    this.setState({
        inputChange: e.target.value
    })
  };

  toggle = (id) => {
      this.props.toggleTask(id);
  };

  remove = (id) => {
      this.props.removeTask(id);
  };

  render() {
    return (
      <div className="App">
        <Input handleChange={this.handleChange} />
        <ButtonAdd addTask={this.addTask}>add task</ButtonAdd>
        <TaskList remove={this.remove} toggle={this.toggle} tasks={this.props.todos}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
   todos: state
});

const mapDispatchToProps = ( dispatch ) => ({
        addText: (text) => dispatch(action(text)),
        toggleTask: (id) => dispatch(toggleTask(id)),
        removeTask: (id) => dispatch(removeTask(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);