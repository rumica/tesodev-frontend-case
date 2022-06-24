import React from "react";
import { NavLink } from "react-router-dom";

const AddNewRecord = () => {
  return (
    <NavLink to="/add-link" className="add-new-record-button">
      Add new record
    </NavLink>
  );
};

export default AddNewRecord;
