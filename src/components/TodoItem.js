import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { deleteTodos, editTodos, completeTodos } from "../store/action/todos";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;

  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.key === "Enter") {
      //13 is key code for enter key
      dispatch(editTodos(id, value));
      inputRef.current.disabled = true;
    }
  };

  return (
    <div>
      <li key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.title}
          onKeyPress={(e) => update(item.id, e.target.value, e)}
        />
        <div className="btns">
          <button onClick={() => changeFocus()}>
            <AiFillEdit />
          </button>
          {item.status === 0 && (
            <button
              style={{ color: "green" }}
              onClick={() => dispatch(completeTodos(item.id))}
            >
              <IoCheckmarkDoneSharp />
            </button>
          )}
          {item.status === 0 && (
            <button
              style={{ color: "red" }}
              onClick={() => dispatch(deleteTodos(item.id))}
            >
              <IoClose />
            </button>
          )}
        </div>
        {item.completed && <span className="completed">Done</span>}
      </li>
    </div>
  );
};

export default TodoItem;
