import React, { useState, useMemo } from 'react'
import { ITEM_PER_PAGE } from '../../utils/constants'
import '../../scss/style.scss'
import { Icon } from '../../Icons'


const ListItems = ({ page, filteredItems }) => {

  const startIndex = (page - 1) * ITEM_PER_PAGE
  const selectedItems = filteredItems.slice(startIndex, startIndex + ITEM_PER_PAGE);

  return (
    <div className="container">
       {selectedItems.map((item, index) => (
         <div key={index} className="list-container">
           <div className="list-info">
             <Icon name="location" />
             <div className="list-title">
               <h2>{item.company}</h2>
               <p>{item.city}, {item.country}</p>
             </div>
           </div>
           <div>
             <h4>{item.fullname}</h4>
             <h4>{item.date}</h4>
           </div>
         </div>
       ))}
    </div>
  )
}

export default ListItems