import React from 'react'

const Form = () => {
    
  return (
    <form>
    <label>Name Surname</label>
    <input type="text" placeholder="Enter name and surname"/>

    <label>Country</label>
    <input type="text" placeholder="Enter a country"/>

    <label>Name Surname</label>
    <input type="text" placeholder="Enter a city"/>

    <label>City</label>
    <input type="text" placeholder="Enter a e-mail (abc@xyz.com)"/>
    <button>Add</button>
  </form>
  )
}

export default Form