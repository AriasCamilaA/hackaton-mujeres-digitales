import React, { useState } from 'react';
import Posts from './components/Posts';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Usuario1', content: 'Este es mi primer comentario', responses: [] }
  ]);

  const handleAddPost = (content) => {
    setPosts([...posts, { id: posts.length + 1, user: 'Usuario Nuevo', content, responses: [] }]);
  };

  const handleAddResponse = (postId, responseContent) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, responses: [...post.responses, { user: 'Otro Usuario', content: responseContent }] }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-primary p-6 flex justify-center items-center">
    <Posts />
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-darkAccent mb-4 text-center">Comentarios</h1>
        
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="p-4 bg-secondary rounded-lg shadow-md">
              <h2 className="font-bold text-dark text-lg mb-1">{post.user}</h2>
              <p className="text-darkAccent mb-3">{post.content}</p>

              <div className="space-y-2">
                {post.responses.map((response, index) => (
                  <div key={index} className="ml-4 p-2 bg-dark rounded-lg text-primary">
                    <strong>{response.user}</strong>
                    <p>{response.content}</p>
                  </div>
                ))}
                <button 
                  onClick={() => handleAddResponse(post.id, "Esta es una respuesta de ejemplo")}
                  className="text-sm text-accent hover:text-darkAccent underline"
                >
                  Responder
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => handleAddPost("Nuevo comentario de ejemplo")}
          className="mt-6 w-full bg-accent text-primary font-semibold py-2 rounded-lg hover:bg-darkAccent transition"
        >
          Agregar Comentario
        </button>
      </div>
    </div>
  );
}

export default App;

