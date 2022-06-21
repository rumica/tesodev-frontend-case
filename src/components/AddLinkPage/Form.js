import React, { useState, useEffect } from 'react'

const Form = ({ items, filteredText, setItems }) => {
 
  const [form, setForm] = useState({ fullname: "", company: "", country: "", city: "", date: "" })

  useEffect(() => {
    setForm({ fullname: "", company: "", country: "", city: "", date: "" })
}, [items])

  const handleSubmit = (e) => {
    
    e.preventDefault()
    if(form.company === '' || form.country === '' ){
        return false
    }
    
    setItems((prev) => [...prev, form])
  }

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.id === "date" ? e.target.value.replaceAll("-", "/") : e.target.value})
    console.log(e.target)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Name Surname</label>
      <input 
      type="text"
      name="fullname" 
      id="fullname" 
      value={form.fullname}
      onChange={onChangeInput}
      placeholder="Enter name and surname"
      />

      <label htmlFor="country">Country</label>
      <input 
      type="text"
      name="country"
      id="country" 
      value={form.country}
      onChange={onChangeInput} 
      placeholder="Enter a country"/>

      <label htmlFor="city">City</label>
      <input 
      type="text" 
      name="city" 
      id="city"
      value={form.city}
      onChange={onChangeInput}
      placeholder="Enter a city"/>

      <label htmlFor="company">Company</label>
      <input 
      type="text" 
      name="company" 
      value={form.company}
      onChange={onChangeInput}
      placeholder="Enter a company"/>

      <label htmlFor="date">Date</label>
      <input 
      type="date"
      id="date" 
      name="date"
      value={form.date}
      onChange={onChangeInput}/>

      <button>Add</button>
    </form>
  )
}

export default Form