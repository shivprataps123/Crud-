import React, { useState } from "react";
import{GoPlus} from "react-icons/go"
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
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

const Todo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        className="todo-input"
        onChange={(e) => handleChange(e)}
        value = {todo}
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          }).then(setTodo(""))
        }
      >
        <GoPlus/>
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);