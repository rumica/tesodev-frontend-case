import React from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/style.scss";
import { TOTAL_ITEM } from "../../utils/constants";
import { Icon } from "../../Icons";

const ListModal = ({ page, filteredItems }) => {
  const startIndex = (page - 1) * TOTAL_ITEM;
  const selectedItems = filteredItems.slice(
    startIndex,
    startIndex + TOTAL_ITEM
  );

  let navigate = useNavigate();

  const handleClickPage = (e) => {
    navigate("/list-page");
  };

  return (
    <div className="modal-container">
      {selectedItems.map((item, index) => (
        <div key={index} className="list-container">
          <div className="list-info">
            <Icon name="location" />
            <div className="list-title">
              <h2>{item.company}</h2>
              <p>
                {item.city}, {item.country}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="button-field">
        <button onClick={handleClickPage}>Show more...</button>
      </div>
    </div>
  );
};

export default ListModal;
