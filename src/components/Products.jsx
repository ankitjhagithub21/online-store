import React, { useState, useEffect } from 'react'
import Product from "../components/Product"
import Loader from './Loader'
import NotFound from '../pages/NotFound'

const Products = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
 

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  if (loading) {
    return <Loader/>
  }
  if(!products){
    return <div className='min-h-screen flex items-center justify-center text-2xl'>Products Not Found</div>
  }
  
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <h2 className='text-center text-3xl mb-10 font-bold text-gray-800'>Latest Products</h2>
        <div className="flex flex-wrap -m-4">
          {
           products.map((product) => {
              return <Product key={product.id} product={product}/>
            })
          }

        </div>
      </div>
    </section>

  )
}

export default Products