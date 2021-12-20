import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

import { getTodos } from "../store/action/todos";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const dispatch = useDispatch();
  const todoItem = useSelector((state) => state.todos);
  console.log("todoitem", todoItem);
  const [sort, setSort] = useState("active");
  const [list, setList] = useState([]);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  console.log("list", list);
  console.log(props?.todos[0]?.length);
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {todoItem?.todos?.length > 0 && sort === "active"
          ? todoItem?.todos?.map((item) => {
              return (
                item.status === 0 && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {/*for completed items */}
        {todoItem?.todos?.length > 0 && sort === "completed"
          ? todoItem?.todos?.map((item) => {
              return (
                item.status === 1 && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {/* for all items */}
        {todoItem?.todos?.length > 0 && sort === "all"
          ? todoItem?.todos?.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
