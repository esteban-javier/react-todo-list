import React, { Component } from "react";
import uuid from "uuid";
import  "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
// showing vs.code github 1
class App extends Component {

  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
            <TodoInput/>
            <TodoList/>
        </div>
      </div>
    </div>
    );
  }
  
}

export default App;
