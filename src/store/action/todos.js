import {
  GET_TODOS,
  DELETE_TODOS,
  ADD_TODOS,
  COMPLETE_TODOS,
  EDIT_TODOS,
} from "./types";
import axios from "axios";

export const getTodos = () => (dispatch) => {
  axios
    .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
    .then((res) => dispatch({ type: GET_TODOS, payload: res.data }));
};

export const deleteTodos = (id) => (dispatch) => {
  dispatch({ type: DELETE_TODOS, id });
};

export const addTodos = (body) => (dispatch) => {
  dispatch({ type: ADD_TODOS, payload: body });
};

export const editTodos = (id, body) => (dispatch) => {
  dispatch({ type: EDIT_TODOS, payload: body, id });
};

export const completeTodos = (id) => (dispatch) => {
  dispatch({ type: COMPLETE_TODOS, id });
};
