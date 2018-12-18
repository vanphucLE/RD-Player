import React, { Component } from 'react';

import TodoElement from './todo-element';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.id = 0;
  }

  inputRef = React.createRef();

  addTodo = () => {
    if (this.inputRef.current.value) {
      const newTodo = {
        id: this.id++,
        description: this.inputRef.current.value
      };

      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  removeTodo = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  render() {
    return (
      <div>
        <div style={{ position: 'relative', zIndex: '2', marginTop: '10px' }}>
          <input
            type='text'
            placeholder='your new todo'
            ref={this.inputRef}
            style={{ marginRight: '10px' }}
          />

          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          <div style={{ height: '100px', backgroundColor: 'white' }}>
            {this.state.todos.map((todo, key) => (
              <TodoElement {...{ todo, key }} removeTodo={this.removeTodo} />
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default Todo;
