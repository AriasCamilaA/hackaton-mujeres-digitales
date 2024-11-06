import { useState, useEffect } from 'react';
import * as postsService from '../api/services/postsService';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const response = await postsService.fetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (postData) => {
    try {
      const response = await postsService.createPost(postData);
      setPosts((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const updatePost = async (id, updatedData) => {
    try {
      await postsService.updatePost(id, updatedData);
      loadPosts();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await postsService.deletePost(id);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return { posts, loading, addPost, updatePost, deletePost };
};

export default usePosts;
