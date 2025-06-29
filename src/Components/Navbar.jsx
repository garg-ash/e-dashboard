import React from 'react'
// import App from './App.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  const auth = localStorage.getItem('user');

  return (
    <ul className='nav'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">Add Product</Link></li>
      <li><Link to="/update">Update Product</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li>{ auth ? <Link to="/logout">Log out</Link>:<Link to="/signup">Sign Up</Link>}</li>
    </ul>
  )
}

export default Navbar