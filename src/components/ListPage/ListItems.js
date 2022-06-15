import React, { useState } from 'react'
import '../../scss/style.scss'
import { Icon } from '../../Icons'


const ListItems = ({ items, setItems, filteredItems }) => {

  return (
    <div className="container">
       {filteredItems.map((item, index) => (
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