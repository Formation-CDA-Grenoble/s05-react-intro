import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Article from './components/Article';

const data = [
  { title: "Bonjour Grenoble!", text: "Salut les copains" },
  { title: "Mon beau titre", text: "Comment allez-vous?" },
  { title: "Angular est-il en perte de vitesse?", text: "On dirait bien..." },
];

function generateArticles(data) {
  return data.map(function(item) {
    return <Article title={item.title} text={item.text} />;
  });
}

function App() {
  return (
    <div id="container">
      <Navbar />
      <main>
        {generateArticles(data)}
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
