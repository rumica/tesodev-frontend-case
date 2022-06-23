import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/style.scss";
import Pagination from "../Pagination";
import SearchInput from "../Search/SearchInput";
import Item from "./Item";
import logo from "../../assets/logo.png";

const ListPage = ({
  handleClick,
  totalPages,
  page,
  items,
  setItems,
  filteredItems,
  filteredText,
  setFilteredText,
}) => {
  return (
    <div className="list-page-container">
      <div className="list-page-header">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="search-field">
          <SearchInput
            filteredText={filteredText}
            items={items}
            filteredItems={filteredItems}
            setFilteredText={setFilteredText}
          />
        </div>
        <div className="search-form">
          <NavLink to="/add-link" className="add-new-record-button">
            Add new record
          </NavLink>
        </div>
      </div>
      <div className="list-items-container">
        <Item
          page={page}
          items={items}
          setItems={setItems}
          filteredItems={filteredItems}
          filteredText={filteredText}
        />
      </div>
      <Pagination handleClick={handleClick} totalPages={totalPages} />
    </div>
  );
};

export default ListPage;
