import { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await postsResponse.json();

        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await usersResponse.json();

        const usersById = usersData.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {});

          setPosts(postsData);
          setUsers(usersById);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  const toggleExpandPost = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId); // Alternar el estado de expansión
  };


  return (
    <div className="container bg-[#50858B] mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`relative bg-[#A1D2CE] p-6 shadow-lg rounded-lg transition-all duration-300 ${
              expandedPostId === post.id ? 'h-auto' : 'h-30'
            }`}
            onMouseEnter={() => toggleExpandPost(post.id)}
            onMouseLeave={() => toggleExpandPost(post.id)}
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-[#5497A7] mb-2">
              Publicado por: {users[post.userId]?.name || 'Usuario desconocido'}
            </p>
            {expandedPostId === post.id && (
              <p className="text-[#50858B]">
                {post.body}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;