import React from 'react'
import './body.css'
import Input from './Input'
//import Footer from './Footer'
const Body = () => {
  return (
    <div className='body'>
        <p className='title'>Sign Up for Free</p>
        <div className="div__names">
            <Input text='First Name *' height='30px' width='165px'/>
            <Input text='Last Name *' height='30px' width='165px'/>
        </div>
        <div className="div__input">
            <Input text='Email Address *' height='30px' width='340px'/> 
            <Input text='Set A Password *' height='30px' width='340px'/> 
        </div>
        
    </div>
  )
}

export default Body