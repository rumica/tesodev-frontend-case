import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import datas from './data/mockData.json'
import AddLinkPage from './components/AddLinkPage/AddLinkPage';
import MainPage from './components/MainPage/MainPage';
import ListPage from './components/ListPage/ListPage';

function App() {

  const [items, setItems] = useState(datas.data)
  const [filteredText, setFilteredText] = useState([])

  const filteredItems = items.filter(item => {
    return Object.keys(item).some(key => {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filteredText.toString().toLowerCase())
    })
  })


  useEffect(() => {
    console.log(items)
  }, [items])


  return (
    <Routes>
      <Route exact path="/" element={<MainPage filteredText={filteredText} setFilteredText={setFilteredText} filteredItems={filteredItems}/>} />
      <Route exact path="/add-link" element={<AddLinkPage />} />
      <Route exact path="/list-page" element={<ListPage items={items} setItems={setItems} filteredItems={filteredItems}/>} />
    </Routes>
  );
}

export default App;
