import { useState, useEffect } from 'react';
import { fetchComments, createComment, updateComment, deleteComment } from '../api/services';

const useComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadComments = async () => {
    try {
      const response = await fetchComments();
      setComments(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (comment) => {
    try {
      const response = await createComment(comment);
      setComments((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editComment = async (id, comment) => {
    try {
      const response = await updateComment(id, comment);
      setComments((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeComment = async (id) => {
    try {
      await deleteComment(id);
      setComments((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  return { comments, loading, error, addComment, editComment, removeComment };
};

export default useComments;
