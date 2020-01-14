import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import { ArticlePage, ArticlesListPage } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Route path="/article/:id" component={ArticlePage} />
      <Route exact path="/" component={ArticlesListPage} />
    </BrowserRouter>
  );
}

export default App;
