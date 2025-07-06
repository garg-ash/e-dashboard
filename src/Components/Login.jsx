import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
  }, [])

  const handleLogin = async () => {
    console.log("Logging in with:", email, password);

    let result = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    result = await result.json();
    console.log(result);

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/');
    } else {
      alert("Please enter valid details");
    }
  };

  return (
    <div className='input-box'>
      <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
