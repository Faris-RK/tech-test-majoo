import axios from "axios";

// axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
// .then((response) => {
//   console.log(response)
// })
const API_URL =
  "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

export const todoList = () => {
  return axios.get(API_URL);
};
console.log(todoList);
