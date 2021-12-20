import {
  GET_TODOS,
  DELETE_TODOS,
  ADD_TODOS,
  EDIT_TODOS,
  COMPLETE_TODOS,
} from "../action/types";

const initialState = { todos: [] };

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case GET_TODOS:
      return { ...state, todos: action.payload };
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODOS:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              title: action.payload,
            };
          }
          return item;
        }),
      };
    case COMPLETE_TODOS:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              status: 1,
            };
          }
          return item;
        }),
      };
  }
};
export default todos;
