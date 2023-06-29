import { API } from '../constants';
import apiClient from '../utils/apiClient';

const todoService = {
  async getTodo() {
    const response = await apiClient.get(API.TODO);
    return response.data;
  },
  async createTodo(createTodoData) {
    const response = await apiClient.post(API.TODO, createTodoData);
    return response.data;
  },
  async updateTodo(id, updateTodoData) {
    const response = await apiClient.put(`${API.TODO}/${id}`, updateTodoData);
    return response.data;
  },
  async deleteTodo(id) {
    const response = await apiClient.delete(`${API.TODO}/${id}`);
    return response;
  },
};

export default todoService;
