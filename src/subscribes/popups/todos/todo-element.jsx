import React, { Component } from 'react';

class TodoElement extends Component {

  remove = () => {
    this.props.removeTodo(this.props.todo.id);
  };

  render() {
    return (
      <li style = {{position: 'relative', zIndex: "2", marginTop:'10px'}}>
        <span
          style={{marginRight:'10px'}}
        >
          {this.props.todo.description}
        </span>
        <button onClick={this.remove}>X</button>
      </li>
    );
  }
}

export default TodoElement;
