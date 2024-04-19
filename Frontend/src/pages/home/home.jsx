import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='h1'>Bajaj Bages</h1>
      <div>
        <button className='login_button' onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Home
