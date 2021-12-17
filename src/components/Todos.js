import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import axios from "axios";

axios
  .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
  .then((response) => {
    console.log(response);
  });

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: todo,
      completed: false,
    });
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      <button className="add-btn" onClick={() => add()}>
        <GoPlus />
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
