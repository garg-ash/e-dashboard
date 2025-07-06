import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [Category, setCategory] = useState("");
    const [company, setCompany] = useState("")

    const handleAddProduct = ()=>{
      console.log(name, price, Category, company)
    }
  return (
    <>
    <div className='input-box'>
        <h1>Add Producct</h1>
        <input type="text" placeholder='Enter Product Name' onChange={(e)=> setName(e.target.value)} value={name} />
        <input type="text" placeholder='Enter Product Price' onChange={(e)=> setPrice(e.target.value)} value={price} />
        <input type="text" placeholder='Enter Product Category' onChange={(e)=> setCategory(e.target.value)} value={Category} />
        <input type="text" placeholder='Enter Product company' onChange={(e)=> setCompany(e.target.value)} value={company} />
        <button onClick={handleAddProduct}>Add Product</button>
    </div>
    </>
  )
}

export default AddProduct