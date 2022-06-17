import React from 'react'
import '../scss/style.scss'

const Pagination = ({ handleClick, totalPages }) => {

  const pages = [...Array(totalPages).keys()].map(num => num + 1)
    
  return (
    <div className="pagination">
        {
            pages.map(num => (
                <button className='pagination-btn' onClick={() => handleClick(num)} key={num}>{num}</button>
            ))
        }
    </div>
  )
}

export default Pagination