import React, { useState } from "react";
import { connect } from "react-redux";
// import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { addTodos } from "../store/action/todos";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: Math.floor(Math.random() * 1000), //randomize id
    title: " ",
    status: 0,
  });

  // const add = () => {
  //   props.addTodo({
  //     id: Math.floor(Math.random() * 1000), //randomize id
  //     item: todo,
  //     completed: false,
  //   });
  //   setTodo("");
  // };

  // const handleChange = (e) => {
  //   setTodo(e.target.value);
  // };
  // console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="todo-input"
        value={todo.title}
      />
      <button className="add-btn" onClick={() => dispatch(addTodos(todo))}>
        <GoPlus />
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
