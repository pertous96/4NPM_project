
import axios from 'axios';
 
const API_URL = 'http://localhost:3000/actions'; // Ajustez selon votre API
 

export const fetchActions = () => {
  return axios.get(API_URL);
};
 

export const addAction = (actionData) => {
  return axios.post(API_URL, actionData);
};
 

export const updateAction = (id, actionData) => {
  return axios.put(`${API_URL}/${id}`, actionData);
};
 

export const deleteAction = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};