import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Todos from './pages/Todos';
import Profile from './pages/Profile';
import Layout from './layout/Layout';
import FooterComponent from './layout/Footer';
import GlobalContextProvider from './providers/GlobalContextProvider';
import Login from './pages/Login';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Layout>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <FooterComponent/>
        </Layout>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;