import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import { datas } from './data/mockData'
import AddLinkPage from './components/AddLinkPage/AddLinkPage';
import MainPage from './components/MainPage/MainPage';
import ListPage from './components/ListPage/ListPage';

function App() {

  const [items, setItems] = useState(datas)
  const [filteredText, setFilteredText] = useState([])

  const filteredItems = items.filter(item => {
    return Object.keys(item).some(key => {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filteredText.toString().toLowerCase())
    })
  })

  return (
    <Routes>
      <Route exact path="/" element={<MainPage setItems={setItems} filteredText={filteredText} setFilteredText={setFilteredText} filteredItems={filteredItems}/>} />
      <Route exact path="/add-link" element={<AddLinkPage />} />
      <Route exact path="/list-page" element={<ListPage filteredText={filteredText} setFilteredText={setFilteredText} filteredItems={filteredItems} items={items} setItems={setItems}/>} />
    </Routes>
  );
}

export default App;
