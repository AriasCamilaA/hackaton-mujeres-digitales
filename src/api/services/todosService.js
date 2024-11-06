import axiosInstance from '../axiosInstance';

export const fetchTodos = () => axiosInstance.get('/todos');
export const fetchTodo = (id) => axiosInstance.get(`/todos/${id}`);
export const createTodo = (data) => axiosInstance.post('/todos', data);
export const updateTodo = (id, data) => axiosInstance.put(`/todos/${id}`, data);
export const deleteTodo = (id) => axiosInstance.delete(`/todos/${id}`);
