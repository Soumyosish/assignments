import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/home" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
