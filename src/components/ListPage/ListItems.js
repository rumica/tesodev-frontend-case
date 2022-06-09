import React from 'react'
import datas from '../../data/mockData.json'
import '../../scss/style.scss'
import { Icon } from '../../Icons'


const ListItems = () => {

  return (
    <div className="container">
       {datas.data.map((item) => (
         <div className="list-container">
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