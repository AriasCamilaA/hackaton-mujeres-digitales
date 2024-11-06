import axiosInstance from '../axiosInstance';

export const fetchPhotos = () => axiosInstance.get('/photos');
export const fetchPhoto = (id) => axiosInstance.get(`/photos/${id}`);
export const createPhoto = (data) => axiosInstance.post('/photos', data);
export const updatePhoto = (id, data) => axiosInstance.put(`/photos/${id}`, data);
export const deletePhoto = (id) => axiosInstance.delete(`/photos/${id}`);
