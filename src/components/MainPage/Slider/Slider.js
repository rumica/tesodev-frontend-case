import React from 'react'
import Slides from './Slides'
import { Icon } from '../../../Icons'

const Slider = () => {
  return (
    <div className="slides">
      <button><Icon name="leftArrow" /></button>
      <Slides />
      <Slides />
      <Slides />
      <button><Icon name="rightArrow" /></button>
    </div>
  )
}

export default Slider