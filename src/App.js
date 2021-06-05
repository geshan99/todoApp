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
      />
    ));
    return (
      <div className="container bg-dark  text-white todo-list">{todos}</div>
    );
  }
  handleCheck(id) {
    console.log("checked", id);
  }
}

export default App;
