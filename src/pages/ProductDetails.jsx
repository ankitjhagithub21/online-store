import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import Loader from '../components/Loader'
import NotFound from './NotFound'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const getProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getProduct()
  }, [id])
  if (loading) {
    return <Loader/>
  }
  if(!product){
    return <NotFound/>
  }
  return (
   <>
    <section>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {
          product && <><div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded mx-auto product"
              alt="hero"
              src={product.image}
              
            />
          </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start">
              <b className='text-indigo-500 mb-2'>{product.category}</b>
              <h1 className="sm:text-4xl text-3xl mb-4 font-medium ">
               {product.title}
              </h1>
              <p className="mb-4 leading-relaxed">
               {product.description}
              </p>
              <div className="flex flex-col w-full items-start">
                
                 <span className='text-lg font-bold mb-4'>Price:   $ {product.price}</span>
                 <button className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={()=>dispatch(addToCart(product))}>
                  Add To Cart
                </button>
              </div>
            </div></>
        }
      </div>
    </section>
    
   </>

  )
}

export default ProductDetails