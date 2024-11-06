import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Posts from './pages/Posts';
import Users from './pages/Users';
import Todos from './pages/Todos';
import Profile from './pages/Profile';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/posts" element={<Posts />} /> */}
            <Route path="/users" element={<Users />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;