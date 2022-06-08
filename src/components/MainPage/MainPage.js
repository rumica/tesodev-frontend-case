import React from 'react'
import '../../scss/style.scss'
import AddNewRecord from '../AddNewRecord'
import logo from '../../assets/logo.png'
import SearchInput from '../Search/SearchInput'
import Slider from './Slider/Slider'
import Footer from './Footer/Footer'

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
            <div>
                <h1>Top News</h1>
            </div>
            <Slider />
        </div>
        <div className="footer-field">
            <Footer />
        </div>
    </div>
  )
}

export default MainPage