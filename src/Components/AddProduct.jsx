
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [Category, setCategory] = useState("");
    const [company, setCompany] = useState("")
    const [error, setError] = useState(false);
    

    const handleAddProduct = async ()=>{

      console.log(!name)
      if(!name || !price || !Category || !company )
      {
        setError(true)
        return false
      }

      console.log(name, price, Category, company)
      const userId = JSON.parse(localStorage.getItem('user'))._id
      console.log(userId)
      let result = await fetch("http://localhost:5000/addproduct", {
        method: "post",
        body: JSON.stringify({name, price, Category, company}),
        headers : {
          "Content-Type" : "application/json"
        }
      })
      result = await result.json();
      console.log(result)
    }

  return (
    <>
      <div className='input-box'>
          <h1>Add Producct</h1>
          <input type="text" placeholder='Enter Product Name' onChange={(e)=> setName(e.target.value)} value={name} />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

          <input type="text" placeholder='Enter Product Price' onChange={(e)=> setPrice(e.target.value)} value={price} />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

          <input type="text" placeholder='Enter Product Category' onChange={(e)=> setCategory(e.target.value)} value={Category} />
            {error && !Category && <span className='invalid-input'>Enter valid Category</span>}

          <input type="text" placeholder='Enter Product company' onChange={(e)=> setCompany(e.target.value)} value={company} />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}

          <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </>
  )
}

export default AddProduct