import ToDoitems from "./Components/ToDoitem";

import React, { Component } from "react";
import todoList from "./todoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: todoList,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  render() {
    const todos = this.state.toDos.map((task) => (
      <ToDoitems
        handleCheck={this.handleCheck}
        key={task.id}
        text={task.text}
        completed={task.completed}
        id={task.id}
      />
    ));
    return (
      <div className="container bg-dark  text-white todo-list">{todos}</div>
    );
  }
  handleCheck(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.toDos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { updatedTodos };
    });
  }
}

export default App;
