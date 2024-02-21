import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import Loader from './Loader'

const SingleCategory = () => {
  const {id} = useParams()
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const getData = async() =>{
     try{
      const res = await fetch(`https://fakestoreapi.com/products/category/${id}`)
      const data = await res.json()
      setProducts(data)
      setLoading(false)
     }catch(error){
      console.log(error)
      setLoading(false)
     }
    }
    useEffect(()=>{
      getData()
    },[])
    if(loading){
        return  <Loader/>
    }
  return (
    <section>
  <div className="container px-5 py-24 mx-auto">
  <h2 className='text-center text-3xl mb-10 font-bold'>{id}</h2>
    <div className="flex flex-wrap -m-4">
      {
        products.map((product)=>{
          return <Product key={product.id} product={product}/>
        })
      }
      
    </div>
  </div>
</section>

  )
}

export default SingleCategory