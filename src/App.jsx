import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Article from './components/Article';

function App() {
  return (
    <div id="container">
      <Navbar />
      <main>
        <Article />
        <Article />
        <Article />
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
