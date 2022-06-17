import React, { useState, useEffect } from 'react'

const Form = ({ filteredText, setItems }) => {
 
  const [form, setForm] = useState({ fullname: "", company: "", country: "", city: "", email: "" })

  useEffect(() => {
    setForm({ fullname: "", company: "", country: "", city: "", email: "" })
}, [filteredText])

  const handleSubmit = (e) => {
    
    if(form.company === '' || form.country === '' ){
        return false
    }
    
    setItems((prev) => [...prev, form])
  }

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name Surname</label>
      <input 
      type="text" 
      name="fullname" 
      value={form.fullname}
      onChange={onChangeInput}
      placeholder="Enter name and surname"
      />

      <label>Country</label>
      <input 
      type="text"
      name="country" 
      value={form.country}
      onChange={onChangeInput} 
      placeholder="Enter a country"/>

      <label>City</label>
      <input 
      type="text" 
      name="city" 
      value={form.city}
      onChange={onChangeInput}
      placeholder="Enter a city"/>

      <label>Company</label>
      <input 
      type="text" 
      name="company" 
      value={form.company}
      onChange={onChangeInput}
      placeholder="Enter a e-mail (abc@xyz.com)"/>
      <button>Add</button>
    </form>
  )
}

export default Form