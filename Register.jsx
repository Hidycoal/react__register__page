import React from 'react'
import './register.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
const Register = () => {
  return (
    <div className='register'>
        <div className="container">
            <div className="wrapper">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Register