import axiosInstance from '../axiosInstance';

export const fetchComments = () => axiosInstance.get('/comments');
export const fetchComment = (id) => axiosInstance.get(`/comments/${id}`);
export const createComment = (data) => axiosInstance.post('/comments', data);
export const updateComment = (id, data) => axiosInstance.put(`/comments/${id}`, data);
export const deleteComment = (id) => axiosInstance.delete(`/comments/${id}`);
