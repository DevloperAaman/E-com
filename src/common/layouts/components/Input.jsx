import React from 'react'

const Input = ({ type, label, placeholder, onchange, name, style, value }) => {
  return (
    <div className='flex fle-col gap-4'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} onchange={onchange} className='focus:ring-[0]'></input>
    </div>
  )
}
 
export default Input