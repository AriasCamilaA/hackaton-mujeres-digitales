import { useState, useEffect } from 'react';
import { fetchPhotos, createPhoto, updatePhoto, deletePhoto } from '../api/services';

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPhotos = async () => {
    try {
      const response = await fetchPhotos();
      setPhotos(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addPhoto = async (photo) => {
    try {
      const response = await createPhoto(photo);
      setPhotos((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editPhoto = async (id, photo) => {
    try {
      const response = await updatePhoto(id, photo);
      setPhotos((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removePhoto = async (id) => {
    try {
      await deletePhoto(id);
      setPhotos((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return { photos, loading, error, addPhoto, editPhoto, removePhoto };
};

export default usePhotos;
