import React from 'react'
import './input.css'
const Input = ({text, height, width}) => {
  return (
    <div className='input'>
        <input placeholder={text} type="text" style={{height:height, width:width}}/>
       
    </div>
  )
}

export default Input