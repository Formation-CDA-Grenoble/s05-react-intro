import React from 'react';
import { BrowserRouter, Route, useParams } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/article/:id" component={ArticlePage} />
      <Route exact path="/" component={ArticlesListPage} />
    </BrowserRouter>
  );
}

export default App;
