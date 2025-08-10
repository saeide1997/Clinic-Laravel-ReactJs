import axios from 'axios';

console.log(1111);
const api = axios.create({
  
  baseURL: 'http://localhost:8001/api',
  withCredentials: true,
});

export default api;
