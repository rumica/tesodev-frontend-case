import React from "react";
import ListItems from "./ListItems";

const Item = ({ page, items, setItems, filteredItems, filteredText }) => {
  return (
    <div>
      <ListItems
        page={page}
        items={items}
        setItems={setItems}
        filteredItems={filteredItems}
        filteredText={filteredText}
      />
    </div>
  );
};

export default Item;
