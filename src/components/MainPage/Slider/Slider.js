import React, { useState } from 'react'
import { slideData } from '../../../data/slideData'
import { Icon } from '../../../Icons'
import Slide from './Slide'

const Slider = () => {

  const [current, setCurrent] = useState(0)
  const length = slideData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slideData) || slideData.length <= 0){
    return null
  }

  console.log(current)

  return (
    <div className="slides">
      <button onClick={prevSlide}><Icon name="leftArrow" /></button>
       <div className="total-slide">
            {slideData.map((slide, index) => (
              <Slide current={current} key={index} slide={slide} index={index}/>
            ))}
       </div>
      <button onClick={nextSlide}><Icon name="rightArrow" /></button>
    </div>
  )
}

export default Slider