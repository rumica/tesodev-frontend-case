import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../scss/style.scss'
import { Icon } from '../../Icons'

const ListModal = ({ filteredItems }) => {

  let navigate = useNavigate()

  const handleClick = (e) => {
    navigate('/list-page')
  }

  return (
    <div className="modal-container">
       {filteredItems.map((item, index) => (
         <div key={index} className="list-container">
           <div className="list-info">
             <Icon name="location" />
             <div className="list-title">
               <h2>{item.company}</h2>
               <p>{item.city}, {item.country}</p>
             </div>
           </div>
         </div>
       ))}
       <div className="button-field">
           <button onClick={handleClick}>Show more...</button>
       </div>
    </div>
  )
}

export default ListModal