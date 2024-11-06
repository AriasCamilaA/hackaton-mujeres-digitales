import axiosInstance from '../axiosInstance';

export const fetchAlbums = () => axiosInstance.get('/albums');
export const fetchAlbum = (id) => axiosInstance.get(`/albums/${id}`);
export const createAlbum = (data) => axiosInstance.post('/albums', data);
export const updateAlbum = (id, data) => axiosInstance.put(`/albums/${id}`, data);
export const deleteAlbum = (id) => axiosInstance.delete(`/albums/${id}`);
