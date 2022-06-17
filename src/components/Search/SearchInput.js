import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../scss/style.scss'

const SearchInput = ({ items, filteredItems, filteredText, setFilteredText }) => {

  let navigate = useNavigate()
  
  const handleClick = (e) => {
    navigate('/list-page')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
        <input
        minLength={3}
        type="text" 
        value={filteredText}
        placeholder="Search"
        onChange={(e) => setFilteredText(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
    </form>
  )
}

export default SearchInput