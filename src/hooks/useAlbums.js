import { useState, useEffect } from 'react';
import { fetchAlbums, createAlbum, updateAlbum, deleteAlbum } from '../api/services';

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAlbums = async () => {
    try {
      const response = await fetchAlbums();
      setAlbums(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addAlbum = async (album) => {
    try {
      const response = await createAlbum(album);
      setAlbums((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editAlbum = async (id, album) => {
    try {
      const response = await updateAlbum(id, album);
      setAlbums((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeAlbum = async (id) => {
    try {
      await deleteAlbum(id);
      setAlbums((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return { albums, loading, error, addAlbum, editAlbum, removeAlbum };
};

export default useAlbums;
