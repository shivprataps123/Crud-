import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import Todoitem from "./Todoitem";

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
      removeTodos: (id) => dispatch(removeTodos(id)),
      updateTodos: (obj) => dispatch(updateTodos(obj)),
      completeTodos: (id) => dispatch(completeTodos(id)),
    };
  };
  const DisplayTodos = (props) => {
    localStorage.setItem("todos", JSON.stringify(props.todos))
    var todos = JSON.parse(localStorage.getItem("todos"))||[]
    console.log(todos)
    const [sortby, setSortby] = useState("active");
    return (
      <div className="displaytodos">
        <div className="buttons">
          <button onClick={() => setSortby("active")}>Active </button>
          <button onClick={() => setSortby("completed")}>Completed</button>
          <button onClick={() => setSortby("all")}>All</button>
        </div>
        <ul>
          {todos.length > 0 && sortby === "active"
            ? todos.map((item) => {
                return (
                  item.completed === false && (
                    <Todoitem
                      key={item.id}
                      item={item}
                      removeTodos={props.removeTodos}
                      updateTodos={props.updateTodos}
                      completeTodos={props.completeTodos}
                    />
                  )
                );
              })
            : null}
          {todos.length > 0 && sortby === "completed"
            ? todos.map((item) => {
                return (
                  item.completed === true && (
                    <Todoitem
                      key={item.id}
                      item={item}
                      removeTodos={props.removeTodos}
                      updateTodos={props.updateTodos}
                      completeTodos={props.completeTodos}
                    />
                  )
                );
              })
            : null}
          {todos.length > 0 && sortby === "all"
            ? todos.map((item) => {
                return (
                  <Todoitem
                    key={item.id}
                    item={item}
                    removeTodos={props.removeTodos}
                    updateTodos={props.updateTodos}
                    completeTodos={props.completeTodos}
                  />
                );
              })
            : null}
        </ul>
      </div>
    );
  };
  
  // export default DisplayTodos
  export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);