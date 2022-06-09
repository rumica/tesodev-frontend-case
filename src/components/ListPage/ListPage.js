import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../scss/style.scss'
import AddNewRecord from '../AddNewRecord'
import SearchInput from '../Search/SearchInput'
import Item from './Item'
import logo from '../../assets/logo.png'

const ListPage = () => {
  return (
    <div className="list-page-container">
      <div className="list-page-header">
        <img src={logo} alt="" />
        <div className="search-field">
          <SearchInput />
        </div>
          <div className="search-form">
            <NavLink to="/add-link" className="add-new-record-button">Add new record</NavLink>
          </div>
      </div>
      <div className="list-items-container">
        <Item />
      </div>
    </div>
  )
}

export default ListPage