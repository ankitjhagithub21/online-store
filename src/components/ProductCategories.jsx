import React from "react"
import { useNavigate } from "react-router-dom"

const ProductCategories = () => {
  const navigate = useNavigate()
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]
  
  
  return (
    <section>
  <div className="container px-5 py-12 mx-auto">
    <h2 className='text-center text-3xl mb-10 font-bold text-gray-800'>Featured Categories</h2>
    <div className="flex flex-wrap -m-4">
      {
        categories.map((category,index)=>{
          return <div className="p-4 lg:w-1/4 md:w-1/2 w-full cursor-pointer" key={index} onClick={()=>navigate(`/products/category/${category}`)}>
          <div className="h-full  shadow rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={`${category}.png`}
              alt="blog"
            />
            <div className="p-6">
             
              <h1 className="text-lg font-medium text-gray-900 text-center">
                {category}
              </h1>
             
            </div>
          </div>
        </div>
        })
      }
    </div>
  </div>
</section>

  )
}

export default ProductCategories