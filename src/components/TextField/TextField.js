import React from 'react'
import "./styles.css"

const TextField = ({label, placeholder, type}) => {
  return (
    <div className='input__container'>
      <label className='label__input'>{label}</label>
      <input type={type} className='input__text' placeholder={placeholder} required/>
    </div>
  )
}

export default TextField