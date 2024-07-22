import React from 'react'
import './header.css'
import Button from './Button'
const Header = () => {
  return (
    <div className='header'>
        <Button color='#53AD8A' value='Sign Up' height='45px'/>
        <Button color='#485358' value='Log in' height='45px'/>
    </div>
  )
}

export default Header