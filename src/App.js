import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import AddLinkPage from './components/AddLinkPage/AddLinkPage';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/add-link" element={<AddLinkPage />} />
    </Routes>
  );
}

export default App;
