import { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/services';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await createTodo(todo);
      setTodos((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editTodo = async (id, todo) => {
    try {
      const response = await updateTodo(id, todo);
      setTodos((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return { todos, loading, error, addTodo, editTodo, removeTodo };
};

export default useTodos;
