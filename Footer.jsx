import React from 'react'
import Button from './Button'
import './footer.css'
const Footer = () => {
    return (
    <div className='footer__wrapper'>
        <div className="relative">
        <div className='footer'>
        <Button color='#53AD8A' value='' height='50px'/>
        <Button color='#485358' value='' height='50px'/>
        </div>
    </div>
    <div className='absolute'>GET STARTED</div>
    </div>
      )
}

export default Footer