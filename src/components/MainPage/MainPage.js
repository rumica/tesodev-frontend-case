import React from 'react'
import '../../scss/style.scss'
import AddNewRecord from '../AddNewRecord'
import logo from '../../assets/logo.png'
import SearchInput from '../Search/SearchInput'
import Slider from './Slider/Slider'

const MainPage = () => {
  return (
    <div className="main-container">
        <div className="navbar">
            <AddNewRecord />
        </div>
        <div className='img-search-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="search-field">
                <p>Find in records</p>
                <SearchInput />
            </div>
        </div>
        <div className="slider-field">
            <Slider />
        </div>
        <div className="footer-field">
            footer
        </div>
    </div>
  )
}

export default MainPage