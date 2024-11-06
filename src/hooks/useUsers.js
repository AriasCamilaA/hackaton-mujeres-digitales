import { useState, useEffect } from 'react';
import { fetchUser, fetchUsers, createUser, updateUser, deleteUser } from '../api/services';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      const _users = response.data.map((user) => ({ ...user, active: true }));
      setUsers(_users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (id) => {
    try {
      const response = await fetchUser(id);
      const _users = response.data.map((user) => ({ ...user, active: true }));
      setUsers(_users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  } 

  const addUser = async (user) => {
    try {
      const response = await createUser(user);
      setUsers((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editUser = async (id, user) => {
    try {
      const response = await updateUser(id, user);
      setUsers((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, loading, error, getUser, addUser, editUser, removeUser };
};

export default useUsers;
