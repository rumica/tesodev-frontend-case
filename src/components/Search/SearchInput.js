import React from 'react'
import '../../scss/style.scss'

const SearchInput = ({ items, filteredItems, filteredText, setFilteredText }) => {

  console.log(filteredText)

  return (
    <form className='search-form'>
        <input 
        type="text" 
        value={filteredText}
        placeholder="Search"
        onChange={(e) => setFilteredText(e.target.value)}/>
        <button>Search</button>
    </form>
  )
}

export default SearchInput