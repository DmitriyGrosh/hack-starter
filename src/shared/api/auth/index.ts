import axios from 'axios';

export const login = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};
