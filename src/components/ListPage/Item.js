import React from 'react'
import ListItems from './ListItems'

const Item = ({ items, setItems, filteredItems, filteredText }) => {
  return (
    <div>
        <ListItems items={items} setItems={setItems} filteredItems={filteredItems} filteredText={filteredText}/>
    </div>
  )
}

export default Item