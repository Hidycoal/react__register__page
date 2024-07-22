import React from 'react'
import './button.css'
const Button = ({color, height, value}) => {
  return (
    <div className='button' style={{height:height, backgroundColor:color, textAlign:'center', paddingTop:'10px'}}>{value}</div>
  )
}

export default Button