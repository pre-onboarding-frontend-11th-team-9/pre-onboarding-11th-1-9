import { API } from '../constants';
import { TodoCreateData, TodoData, TodoUpdateData } from '../types';
import apiClient from '../utils/apiClient';

const todoService = {
  async getTodo() {
    try {
      const response = await apiClient.get<TodoData[]>(API.TODO);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async createTodo(createTodoData: TodoCreateData) {
    try {
      const response = await apiClient.post<TodoData>(API.TODO, createTodoData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async updateTodo(id: number, updateTodoData: TodoUpdateData) {
    try {
      const response = await apiClient.put<TodoData>(
        `${API.TODO}/${id}`,
        updateTodoData,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteTodo(id: number) {
    try {
      const response = await apiClient.delete(`${API.TODO}/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default todoService;
