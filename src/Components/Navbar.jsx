
import React from 'react'
// import App from './App.css'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  
  const auth = localStorage.getItem('user');
  const navifate = useNavigate()
  const logout = ()=>{
    localStorage.clear();
  }

  return (
    <>
    <div className='navbar'>
      <img className='logo' src="https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833524_1280.png" alt="logo" />
    { auth ? <ul className='nav'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">Add Product</Link></li>
      <li><Link to="/update">Update Product</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link onClick={logout} to="/signup">Log out ({(JSON.parse(auth).name)})</Link></li>
    </ul>
    :
    <ul className='nav nav-right'>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to= '/login'>Login</Link></li>
    </ul>
    }
    </div>
    </>
    
  )
}

export default Navbar