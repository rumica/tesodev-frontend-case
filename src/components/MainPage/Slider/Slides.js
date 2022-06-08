import React from 'react'
import sliderImage from '../../../assets/slider-image.png'

const Slides = () => {
  return (
    <div className='slide'>
        <img src={sliderImage} alt="" />
        <div>
            <h2>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h2>
            <p>1h ago · by Troy Corlson</p>
        </div>
    </div>
  )
}

export default Slides