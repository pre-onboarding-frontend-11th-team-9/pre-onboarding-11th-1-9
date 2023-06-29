import { API } from '../constants';
import apiClient from '../utils/apiClient';

const todoService = {
  async getTodo() {
    try {
      const response = await apiClient.get(API.TODO);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async createTodo(createTodoData) {
    try {
      const response = await apiClient.post(API.TODO, createTodoData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async updateTodo(id, updateTodoData) {
    try {
      const response = await apiClient.put(`${API.TODO}/${id}`, updateTodoData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteTodo(id) {
    try {
      const response = await apiClient.delete(`${API.TODO}/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default todoService;
