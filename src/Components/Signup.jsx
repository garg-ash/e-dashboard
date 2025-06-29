// import { application } from 'express';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
    const auth = localStorage.getItem('user');
      if (auth){
        navigate('/')
      }
    })

    const handleclick = async ()=>{
        console.log(name, email, password)
        let result = await fetch('http://localhost:5000/register', {
          method : 'post',
          body : JSON.stringify({name, email, password}),
          headers : {
            'Content-Type': 'application/json'
          }
        })
        result = await result.json()
        console.log(result)
        localStorage.setItem('user', JSON.stringify(result))
        if(result){
          navigate('/')
        }
    }

  return (
    <>
       <div className='input-box'>
        <h1>Sign Up</h1>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="text" placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)} value={email} />
        <input type="password" placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)} value={password} />
        <button onClick={handleclick} type='button'>Sign Up</button>
       </div>

    </>
    
  )
}

export default Signup