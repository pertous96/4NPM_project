import axios from 'axios';
 
const API_URL = 'http://localhost:3000/auth';
 
export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
 
export const register = (email, password) => {
  return axios.post(`${API_URL}/register`, { email, password });
};