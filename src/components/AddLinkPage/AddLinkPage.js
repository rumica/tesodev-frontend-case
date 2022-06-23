import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../scss/style.scss";
import Form from "./Form";
import { Icon } from "../../Icons";

const AddLinkPage = ({ items, filteredText, setItems }) => {
  return (
    <div className="add-link-page-container">
      <div className="add-link-page-header">
        <img src={logo} alt="" />
        <NavLink to="/list-page" className="return">
          <span>
            <Icon name="arrow" />
          </span>{" "}
          Return to List Page
        </NavLink>
      </div>
      <Form items={items} filteredText={filteredText} setItems={setItems} />
    </div>
  );
};

export default AddLinkPage;
