import React from 'react'
import Slides from './Slides'

const Slider = () => {
  return (
    <div className="slides">
      <button>prev</button>
      <Slides />
      <Slides />
      <Slides />
      <button>next</button>
    </div>
  )
}

export default Slider