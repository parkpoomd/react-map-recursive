import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/example3" element={<Example3 />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Map Recursive</h1>
      <ul>
        <li>
          <Link to="/example1">Example 1</Link>
        </li>
        <li>
          <Link to="/example2">Example 2</Link>
        </li>
        <li>
          <Link to="/example3">Example 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
