import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import AddLinkPage from './components/AddLinkPage/AddLinkPage';
import MainPage from './components/MainPage/MainPage';
import ListPage from './components/ListPage/ListPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/add-link" element={<AddLinkPage />} />
      <Route exact path="/list-page" element={<ListPage />} />
    </Routes>
  );
}

export default App;
