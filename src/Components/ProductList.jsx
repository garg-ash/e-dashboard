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
    console.log("products",  product)

  return (
    <div className='product-list'>

        <h2>product list</h2>
        <ul>
            <li>Sr.No.</li>
            <li>Price</li>
            <li>category</li>
            <li>Company</li>
        </ul>
        {
            product.map((item, index)=>{
                <ul>
                   <li>{index}.</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                </ul>
            })
        }
    </div>
  )
}

export default ProductList