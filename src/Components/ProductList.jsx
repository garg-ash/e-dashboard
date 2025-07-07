import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProducts()
    }, [])

    const getProducts = async ()=>{
        let result = await fetch("http://localhost:5000/products", )
        result = await result.json()
        setProduct(result)
    }
    console.log("product",  product)

    const deleteProduct = async(id)=>{
        let result = await fetch("http://localhost:5000/product/${id}", {
            method : "post" 
        });
        result = await result.json()
        if(result){
            getProducts()
        }
    }

  return (
    <div className='product-list'>

        <h2>product list</h2>
        <ul>
            <li>Sr.No.</li>
            <li>Name</li>
            <li>Price</li>
            <li>category</li>
            <li>Company</li>
            <li>Actions</li>
        </ul>
        {
            product.map((item, index)=>{
                <ul key={item._id}>
                   <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.Category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
                </ul>
            })
        }
    </div>
  )
}

export default ProductList