import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import datas from "./data/mockData.json";
import AddLinkPage from "./components/AddLinkPage/AddLinkPage";
import MainPage from "./components/MainPage/MainPage";
import ListPage from "./components/ListPage/ListPage";
import { ITEM_PER_PAGE } from "./utils/constants";

const { cols, data } = datas;
const arrangedDatas = data.map((item) => {
  const newObj = {};
  cols.forEach((col, index) => {
    newObj[col] = item[index];
  });

  return newObj;
});

function App() {
  const [items, setItems] = useState(arrangedDatas);
  const [filteredText, setFilteredText] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const filteredItems = items.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toString().toLowerCase());
    });
  });

  useEffect(() => {
    setTotalPages(
      Math.ceil(
        filteredItems
          ? filteredItems.length / ITEM_PER_PAGE
          : items.length / ITEM_PER_PAGE
      )
    );
  }, [filteredItems]);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <Routes>
      <Route
        exact path="/"
        element={
          <MainPage
            setItems={setItems}
            page={page}
            filteredText={filteredText}
            setFilteredText={setFilteredText}
            filteredItems={filteredItems}
          />
        }
      />
      <Route
        exact path="/add-link"
        element={
          <AddLinkPage
            items={items}
            filteredText={filteredText}
            setItems={setItems}
          />
        }
      />
      <Route
        exact path="/list-page"
        element={
          <ListPage
            handleClick={handleClick}
            totalPages={totalPages}
            page={page}
            filteredText={filteredText}
            setFilteredText={setFilteredText}
            filteredItems={filteredItems}
            items={items}
            setItems={setItems}
          />
        }
      />
    </Routes>
  );
}

export default App;
