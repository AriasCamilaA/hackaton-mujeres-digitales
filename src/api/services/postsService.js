import axiosInstance from "../axiosInstance";

export const fetchPosts = () => axiosInstance.get('/posts');
export const fetchPost = (id) => axiosInstance.get(`/posts/${id}`);
export const createPost = (data) => axiosInstance.post('/posts', data);
export const updatePost = (id, data) => axiosInstance.put(`/posts/${id}`, data);
export const deletePost = (id) => axiosInstance.delete(`/posts/${id}`);
